import { v } from "convex/values";



export const InventoryOptional = {
    articleCode: v.optional(v.number()),
    articleName: v.optional(v.string()),
    unit: v.optional(v.number()),
    affectationCode: v.optional(v.string()),
    familyCode: v.optional(v.number()),
}


export const StockOptional = {
    articleName: v.optional(v.string()),
    articleCode: v.optional(v.number()),
    quantity: v.optional(v.number()),
    unit: v.optional(v.string()),
    familyCode : v.optional(v.number()),
}

export const WorkersOptional = {
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    username: v.optional(v.string()),
}



export const SessionsOptional = {
    active : v.optional(v.boolean()),
    statrtDate : v.optional(v.number()),
    endDate : v.optional(v.number()),
    priceShift : v.optional(v.number()),
    quantityShift : v.optional(v.number()),
}


export const SessionGroupsOptional = {
    sessionId : v.optional(v.id('sessions')),
    groupName : v.optional(v.string()),
}


export const SessionWorkerOptional = {
    groupId : v.optional(v.id('sessionGroups')),
    username : v.optional(v.string()),
    password : v.optional(v.string()),

}


export const AffectationsOptional = {
    affectationName: v.optional(v.string()),
}


export const UserOptional = {
    name: v.optional(v.string()),
    role: v.optional(v.string()),
}