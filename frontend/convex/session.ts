import { v } from "convex/values";
import {  mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated, codeSessionNotFound } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";


export const getActiveSession = query({
    args: {  },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const session = await ctx.db.query('sessions')
        .withIndex(
            "by_active",
            (q) => q.eq('active', true)).first()

        return {session}
    }
})

export const load = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {

        return await ctx.db.query('sessions').order("desc").paginate(args.paginationOpts);

    }
})




export const loadRecords = query({
    args: { paginationOpts: paginationOptsValidator,active:v.optional(v.boolean()) },
    handler: async (ctx, args) => {

        if(args.active){

            const activeSession = await ctx.db.query('sessions').withIndex("by_active", (q) => q.eq('active', true)).first()


            return await ctx.db.query('sessionRecord')
            .withIndex("by_sessionId",(q) => q.eq('sessionId', activeSession!._id))
            .paginate(args.paginationOpts);
          
        }

        return await ctx.db.query('sessionRecord').order("desc").paginate(args.paginationOpts);

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
            active:true
        }

        const data = await ctx.db.insert('sessions',session)

        return data
    }

})


export const closeSession = mutation({
    args: { },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const activeSession = await ctx.db.query('sessions')
        .withIndex(
            "by_active",
            (q) => q.eq('active', true)).first()

        if(!activeSession) return {code: codeSessionNotFound}    

        const data = await ctx.db.patch(activeSession._id,{active:false})

        return data
    }

})