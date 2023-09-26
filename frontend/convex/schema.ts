import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";



export const Workers = {
    name: v.string(),
    phone: v.string(),
    username: v.string(),
}


export const FamilyCode = {
    code: v.string(),
    name: v.string(),
}

export const ScannedArticles = {
    articleCode: v.string(),
    articleName: v.string(),
    affectationId: v.id('affectations'),
}

export const User = {
    name: v.string(),
    tokenIdentifier: v.string(),
    role: v.string(),
}

export const Stock = {
    articleName: v.string(),
    articleCode: v.string(),
    quantity: v.number(),
    unit: v.string(),
    familyCode : v.id('familyCode'),
}

export const Affectations = {
    affectionCode: v.string(),
    affectionName: v.string(),
}

export const AffectationPermisions = {
    userId : v.id('users'),
    affectationIds : v.array(v.id('affectations')),
}

export const GroupsPermissions = {
    groupId : v.id('groups'),
    permissionIds : v.array(v.id('permissions')),
}


export const Sessions = {
    active : v.boolean(),
    statrtDate : v.int64(),
    endDate : v.int64(),
    priceShift : v.number(),
    quantityShift : v.number(),
}

export const SessionGroups = {
    sessionId : v.id('sessions'),
    groupName : v.string(),
    supervisorId : v.id('users'),
}


export const SessionWorkers = {
    groupId : v.id('sessionGroups'),
    workerId : v.id('workers'),
    username : v.string(),
    password : v.string(),

}

export const Inventory = {
    articleCode : v.string(),
    articleName : v.string(),
    unit : v.string(),
    familyCode : v.id('familyCode'),
}

export const SessionRecord = {
    sessionId : v.id('sessions'),
    workerId : v.id('workers'),
    groupId : v.id('sessionGroups'),
    workerName : v.string(),
    articlaName : v.string(),
    articleCode : v.string(),
    priceShift : v.number(),
    quantityShift : v.number(),
    stockUnit : v.number(),
    timestamp : v.int64(),
    inventoryId : v.id('inventory'),
    recordQuantity : v.number(),
}

const workers = defineTable(Workers)

const familyCode = defineTable(FamilyCode).index('by_code', ['code'])

const scannedArticles = defineTable(ScannedArticles)
const user = defineTable(User)
const stock = defineTable(Stock)
const affectations = defineTable(Affectations)
const affectationPermisions = defineTable(AffectationPermisions)
const groupsPermissions = defineTable(GroupsPermissions)
const sessions = defineTable(Sessions)
const sessionGroups = defineTable(SessionGroups)
const sessionWorkers = defineTable(SessionWorkers)
const inventory = defineTable(Inventory)
const sessionRecord = defineTable(SessionRecord)


export default defineSchema({
    workers,
    familyCode,
    scannedArticles,
    user,
    stock,
    affectations,
    affectationPermisions,
    groupsPermissions,
    sessions,
    sessionGroups,
    sessionWorkers,
    inventory,
    sessionRecord,
});