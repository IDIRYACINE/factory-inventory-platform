import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { Affectations,  } from "./schema";
import { AffectationsOptional } from "./helpers/updateHelpers";




export const get = query({
    args: { code: v.string() },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.query(
            'affectations'
        ).withIndex(
            "by_affectationCode",
            (q) => q.eq('affectationCode', args.code)).first()

        return data
    }
})

export const load = query({
    args: {  },
    handler: async (ctx, args) => {



        const affectations = await ctx.db.query('affectations').withIndex('by_affectationCode').collect();

        return {affectations}

    }
})


export const create = mutation({
    args: {affectation:v.object(Affectations)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.insert('affectations',args.affectation)

        return {affectationId:data}
    }

})


export const update = mutation({
    args: {id :v.id("affectations") ,affectation:v.object(AffectationsOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id,args.affectation)

        return data
    }

})