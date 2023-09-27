

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { AffectationPermisions,  } from "./schema";





export const load = query({
    args: {userId:v.id("user")},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }


        const permissions = await ctx.db.query('affectationPermisions')
        .withIndex("by_userId",(q) => q.eq('userId', args.userId))
        .collect();

        return {permissions}

    }
})


export const grant = mutation({
    args: {affectationPermision:v.object(AffectationPermisions)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }


        const data = await ctx.db.insert('affectationPermisions',args.affectationPermision)

        return data
    }

})


export const revoke = mutation({
    args: {id :v.id("affectationPermisions")},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.delete(args.id)

        return data
    }

})