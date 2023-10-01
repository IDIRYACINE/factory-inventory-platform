import { v } from "convex/values";
import {  mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { Stock,  } from "./schema";
import { StockOptional } from "./helpers/updateHelpers";
import { incrementStockCacheVersion } from "./helpers/utility";




export const get = query({
    args: { code: v.number() },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.query(
            'stock'
        ).withIndex(
            "by_articleCode",
            (q) => q.eq('articleCode', args.code)).first()

        return data
    }
})

export const load = query({
    args: { },
    handler: async (ctx, args) => {



        return await ctx.db.query('stock').withIndex('by_articleCode').collect();

    }
})


export const create = mutation({
    args: {stock:v.object(Stock)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const stockId = await ctx.db.insert('stock',args.stock)
        await incrementStockCacheVersion(ctx.db)

        return {stockId}
    }

})


export const update = mutation({
    args: {id :v.id("stock") ,stock:v.object(StockOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

         await ctx.db.patch(args.id,args.stock)

         await incrementStockCacheVersion(ctx.db)

        return {stockId:args.id}
    }

})