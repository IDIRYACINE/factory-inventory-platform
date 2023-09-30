import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { Inventory,  } from "./schema";
import { InventoryOptional } from "./helpers/updateHelpers";




export const get = query({
    args: { code: v.number() },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.query(
            'inventory'
        ).withIndex(
            "by_articleCode",
            (q) => q.eq('articleCode', args.code)).first()

        return data
    }
})

export const load = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {



        return await ctx.db.query('inventory').order("desc").paginate(args.paginationOpts);

    }
})


export const create = mutation({
    args: {inventory:v.object(Inventory)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.insert('inventory',args.inventory)

        return data
    }

})


export const update = mutation({
    args: {id :v.id("inventory") ,inventory:v.object(InventoryOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id,args.inventory)

        return data
    }

})