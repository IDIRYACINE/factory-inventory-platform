import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { Affectations, FamilyCode, Inventory, Stock } from "./schema";



export const importInventory = mutation({
    args: { data: v.array(v.object(Inventory)) },
    handler: async (ctx, args) => {
        const authenticated = await isAuthenticated(ctx.auth);

        if (!authenticated) {
            return {
                code: codeNotAuthenticated
            }
        }

        const { data } = args;

        for (const item of data) {
            const existingItem = await ctx.db.query('inventory').withIndex('by_articleCode', (q) => q.eq('articleCode', item.articleCode)).first()

            if (!existingItem) {
                await ctx.db.insert('inventory', item)
            }
        }



    },
})


export const importFamilyCode = mutation({
    args: { data: v.array(v.object(FamilyCode)) },
    handler: async (ctx, args) => {
        const authenticated = await isAuthenticated(ctx.auth);

        if (!authenticated) {
            return {
                code: codeNotAuthenticated
            }
        }

        const { data } = args;

        for (const item of data) {
            const existingItem = await ctx.db.query('familyCode').withIndex('by_code', (q) => q.eq('code', item.code)).first()

            if (!existingItem) {
                await ctx.db.insert('familyCode', item)
            }
        }

    },
})


export const importStock = mutation({
    args: { data: v.array(v.object(Stock)) },
    handler: async (ctx, args) => {
        const authenticated = await isAuthenticated(ctx.auth);

        if (!authenticated) {
            return {
                code: codeNotAuthenticated
            }
        }

        const { data } = args;

        for (const item of data) {
            const existingItem = await ctx.db.query('stock').withIndex('by_articleCode', (q) => q.eq('articleCode', item.articleCode)).first()

            if (!existingItem) {
                await ctx.db.insert('stock', item)
            }
        }

    },
})


export const importAffectation = mutation({
    args: { data: v.array(v.object(Affectations)) },
    handler: async (ctx, args) => {
        const authenticated = await isAuthenticated(ctx.auth);

        if (!authenticated) {
            return {
                code: codeNotAuthenticated
            }
        }

        const { data } = args;

        for (const item of data) {
            const existingItem = await ctx.db.query('affectations').withIndex('by_affectationCode', (q) => q.eq('affectationCode', item.affectationCode)).first()

            if (!existingItem) {
                await ctx.db.insert('affectations', item)
            }
        }

    },
})