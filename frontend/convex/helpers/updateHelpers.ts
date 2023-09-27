import { v } from "convex/values";



export const InventoryOptional = {
    articleCode: v.optional(v.string()),
    articleName: v.optional(v.string()),
    unit: v.optional(v.string()),
    familyCode: v.optional(v.id('familyCode')),
}


export const StockOptional = {
    articleName: v.optional(v.string()),
    articleCode: v.optional(v.string()),
    quantity: v.optional(v.number()),
    unit: v.optional(v.string()),
    familyCode : v.optional(v.id('familyCode')),
}

export const WorkersOptional = {
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    username: v.optional(v.string()),
}