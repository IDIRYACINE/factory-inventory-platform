

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { AffectationPermisions,  } from "./schema";
import { AffectationPermisionsCreate } from "./helpers/createHelpers";





export const load = query({
    args: {},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const supervisorId = (await ctx.auth.getUserIdentity())!.tokenIdentifier


        const permissions = await ctx.db.query('affectationPermisions')
        .withIndex("by_tokenIdentifer_affectationCode",(q) => q.eq('tokenIdentifier',supervisorId))
        .collect();

        return {permissions}

    }
})


export const grant = mutation({
    args: {affectationPermision:v.object(AffectationPermisionsCreate)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const tokenIdentifier = (await ctx.auth.getUserIdentity())!.tokenIdentifier

        const data = await ctx.db.insert('affectationPermisions',{affectationCode:args.affectationPermision.affectationCode,tokenIdentifier})

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