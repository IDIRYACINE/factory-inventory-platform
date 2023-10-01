import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { Inventory,  } from "./schema";
import { InventoryOptional } from "./helpers/updateHelpers";
import {  incrementInventoryCacheVersion } from "./helpers/utility";




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
    args: { },
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)
        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const tokenIdentifier = (await ctx.auth.getUserIdentity())!.tokenIdentifier

        console.log(tokenIdentifier)

        const user = await ctx.db.query('user').withIndex('by_tokenIdentifier',q=>q.eq('tokenIdentifier',tokenIdentifier)).first()
        console.log(user)

        if(user!.role === 'admin'|| user!.role ==='superadmin'){
            const data = await ctx.db.query('inventory').collect()
            return {inventory:data}
        }

        const permissions = await ctx.db.query('affectationPermisions').
        withIndex('by_tokenIdentifer_affectationCode',q=>q.eq('tokenIdentifier',tokenIdentifier)).collect()


        const inventory = []

        for (const permission of permissions) {
            const data = await ctx.db.query('inventory').withIndex('by_affecationCode',q=>q.eq('affectationCode',permission.affectationCode)).collect()
            inventory.push(...data)
        }

        return {inventory}

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
        await incrementInventoryCacheVersion(ctx.db)


        return {inventoryId:data}
    }

})


export const update = mutation({
    args: {id :v.id("inventory") ,inventory:v.object(InventoryOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

         await ctx.db.patch(args.id,args.inventory)
        await incrementInventoryCacheVersion(ctx.db)

        return {inventoryId:args.id}
    }

})