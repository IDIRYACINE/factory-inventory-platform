import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { SessionWorker, } from "./schema";
import { SessionWorkerOptional } from "./helpers/updateHelpers";



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

        return {workerId}
    }

})


export const update = mutation({
    args: { id: v.id("sessionWorkers"), sessionWorker: v.object(SessionWorkerOptional) },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id, args.sessionWorker)

        return data
    }

})