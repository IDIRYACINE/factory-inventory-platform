import { v } from "convex/values";
import { action, internalQuery, mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { Workers,  } from "./schema";
import { WorkersOptional } from "./helpers/updateHelpers";




export const load = query({
    args: {  },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }


       const workers=  await ctx.db.query('workers').order("desc").collect();

       return {workers}
    }
})


export const create = mutation({
    args: {worker:v.object(Workers)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const workerId = await ctx.db.insert('workers',args.worker)

        return {workerId}
    }

})


export const update = mutation({
    args: {id :v.id("workers") ,worker:v.object(WorkersOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id,args.worker)

        return {workerId:args.id}
    }

})