import { v } from "convex/values";
import { action, internalQuery, mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { FamilyCode } from "./schema";




export const get = query({
    args: { code: v.string() },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.query(
            'familyCode'
        ).withIndex(
            "by_code",
            (q) => q.eq('code', args.code)).first()

        return data
    }
})

export const load = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {



        return await ctx.db.query('familyCode').order("desc").paginate(args.paginationOpts);

    }
})


export const create = mutation({
    args: {familyCode:v.object(FamilyCode)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.insert('familyCode',args.familyCode)

        return data
    }

})


export const update = mutation({
    args: {id :v.id("familyCode") ,code:v.optional(v.string()),name:v.optional(v.string())},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const patched:{code?:string,name?:string} = {}

        if(args.code){
            patched.code = args.code
        }

        if(args.name){
            patched.name = args.name
        }

        const data = await ctx.db.patch(args.id,patched)

        return data
    }

})