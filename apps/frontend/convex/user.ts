

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { User,  } from "./schema";
import { UserOptional } from "./helpers/updateHelpers";




export const get = query({
    args: { code: v.string() },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.query(
            'user'
        ).withIndex(
            "by_tokenIdentifier",
            (q) => q.eq('tokenIdentifier', args.code)).first()

        return data
    }
})

export const load = query({
    args: {  },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)
        if(!authenticated) return {code:codeNotAuthenticated}

        const users = await ctx.db.query('user').collect();

        return {users}

    }
})


export const create = mutation({
    args: {user:v.object(User)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }


        const userId = await ctx.db.insert('user',args.user)

        return {userId}
    }

})


export const update = mutation({
    args: {id :v.id("user") ,user:v.object(UserOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id,args.user)

        return {userId:args.id}
    }

})