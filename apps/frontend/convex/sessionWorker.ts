import { v } from "convex/values";
import { httpAction, internalQuery, mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { SessionWorker, } from "./schema";
import { SessionWorkerOptional } from "./helpers/updateHelpers";

import { internal } from "./_generated/api";
import { incrementSessionWorkerCacheVersion } from "./helpers/utility";


export const load = query({
    args: {},
    handler: async (ctx, args) => {

        if (!isAuthenticated(ctx.auth)) {
            return { code: codeNotAuthenticated }
        }



        let workers = await ctx.db.query('sessionWorkers')
            .collect();

        return { workers }


    }
})


export const create = mutation({
    args: { sessionWorker: v.object(SessionWorker) },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const workerId = await ctx.db.insert('sessionWorkers', args.sessionWorker)
        await incrementSessionWorkerCacheVersion(ctx.db)


        return { workerId }
    }

})


export const update = mutation({
    args: { id: v.id("sessionWorkers"), sessionWorker: v.object(SessionWorkerOptional) },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        await ctx.db.patch(args.id, args.sessionWorker)
        await incrementSessionWorkerCacheVersion(ctx.db)

        return {sessionWorkerId:args.id}
    }

})

export const login = internalQuery({
    args: { username: v.string(), password: v.string() },
    handler: async (ctx, args) => {

        const authorize = await ctx.db.query('sessionWorkers')
            .withIndex(
                "by_username_password", (q) => q.eq('username', args.username).eq('password', args.password)
            )
            .first()
       
        const res = {
            authenticated: authorize !== null,
            workerId: authorize?.workerId,
            workerName: authorize?.username,
            department : [],
            groupId: authorize?.groupId,

        }
        return res
    },
})

export const loginWorker = httpAction(async (ctx, req) => {

    const headers =  req.headers


        const username = headers.get('Username')
        const password = headers.get('Password')

    if(!username || !password ) return new Response(JSON.stringify({authenticated:false}))

    const authoriseLogin = await ctx.runQuery(internal.sessionWorker.login, {username,password})


    return new Response(JSON.stringify(authoriseLogin));

})