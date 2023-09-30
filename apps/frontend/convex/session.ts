import { v } from "convex/values";
import { httpAction, internalMutation, mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeAlreadyScanned, codeInventoryNotFound, codeNoActiveSession, codeNotAuthenticated, codeSessionNotFound, codeSucess, codeWorkerDoesntExist } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { internal } from "./_generated/api";


export const getActiveSession = query({
    args: {},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const session = await ctx.db.query('sessions')
            .withIndex(
                "by_active",
                (q) => q.eq('active', true)).first()

        return { session }
    }
})

export const load = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {

        return await ctx.db.query('sessions').order("desc").paginate(args.paginationOpts);

    }
})




export const loadRecords = query({
    args: { paginationOpts: paginationOptsValidator, active: v.optional(v.boolean()) },
    handler: async (ctx, args) => {



        const activeSession = await ctx.db.query('sessions').withIndex("by_active", (q) => q.eq('active', true)).first()


        return await ctx.db.query('sessionRecord')
            .withIndex("by_sessionId", (q) => q.eq('sessionId', activeSession!._id))
            .paginate(args.paginationOpts);



    }
})


export const openSession = mutation({
    args: {},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const session = {
            startDate: Date.now(),
            active: true
        }

        const data = await ctx.db.insert('sessions', session)

        return { sessionId: data }
    }

})


export const closeSession = mutation({
    args: {},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const activeSession = await ctx.db.query('sessions')
            .withIndex(
                "by_active",
                (q) => q.eq('active', true)).first()

        if (!activeSession) return { code: codeSessionNotFound }

        const data = await ctx.db.patch(activeSession._id, { active: false })

        return { sessionId: activeSession._id }
    }

})


export const handleRecord = internalMutation({
    args: {
        "barcode": v.number(),
        "workerId": v.id("workers"),
    },
    handler: async (ctx, args) => {

        const activeSession = await ctx.db.query('sessions').withIndex("by_active", (q) => q.eq('active', true)).first()

        if (!activeSession) return { code: codeNoActiveSession }

        const worker = await ctx.db.get(args.workerId)

        if (!worker) return { code: codeWorkerDoesntExist }

        const alreadyScanned = await ctx.db.query('scannedArticles').withIndex("by_code", (q) => q.eq('articleCode', args.barcode)).first()

        if (alreadyScanned) return { code: codeAlreadyScanned }
        else {
            await ctx.db.insert('scannedArticles', { articleCode: args.barcode })
        }

        const recordExists = await ctx.db.query('sessionRecord').withIndex("by_sessionId_code", (q) => q.eq('sessionId', activeSession._id).eq('articleCode', args.barcode)).first()

        if (recordExists) return {
            barcode: recordExists!.articleCode,
            itemName: recordExists!.articleName,
            locationName: recordExists!.affectationCode,
            locationId: recordExists!.affectationCode,
            code: codeSucess
        }

        const sessionWorker = await ctx.db.query('sessionWorkers').withIndex("by_workerId", (q) => q.eq('workerId', worker!._id)).first()

        const article = await ctx.db.query('inventory').withIndex("by_articleCode", (q) => q.eq('articleCode', args.barcode)).first()

        if (!article) return { code: codeInventoryNotFound }

        const record = {
            sessionId: activeSession._id,
            workerId: worker!._id,
            groupId: sessionWorker!.groupId,
            workerName: worker!.name,
            articleCode: article!.articleCode,
            articleName: article!.articleName,
            affectationCode: article!.affectationCode,
            price: article!.unit,
        }

        await ctx.db.insert('sessionRecord', record)


        const res = {
            barcode: article!.articleCode,
            itemName: article!.articleName,
            locationName: article!.affectationCode,
            locationId: article!.affectationCode,
            code: codeSucess
        }

        return res
    }
})

export const handleMissingRecords = internalMutation({
    args: {},
    handler: async (ctx, args) => {

        const inventory = await ctx.db.query('inventory').collect()

        for (const item of inventory) {

            const scanned = await ctx.db.query('scannedArticles').withIndex("by_code", (q) => q.eq('articleCode', item.articleCode)).first()
            if (!scanned) {
                await ctx.db.insert('missingArticles', { articleCode: item.articleCode })

                const record = {
                    articleCode: item.articleCode,
                    articleName: item.articleName,
                    affectationCode: item.affectationCode,
                    price: item.unit,
                }
                await ctx.db.insert('missingSessionRecord', record)
            }
        }

    },
})



export const submitRecord = httpAction(async (ctx, req) => {

    const json = await req.json()

    const res = await ctx.runMutation(internal.session.handleRecord, json)

    return new Response(JSON.stringify(res))
})

export const submitRecordBatch = httpAction(async (ctx, req) => {

    const json = await req.json()

    const results = await Promise.all(json.map((record: any) => ctx.runMutation(internal.session.handleRecord, record)))

    return new Response(JSON.stringify(results))
})

