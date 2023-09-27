import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";



export const Workers = {
    name: v.string(),
    phone: v.string(),
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
    startDate : v.number(),
    endDate : v.optional(v.number()),
    priceShift : v.optional(v.number()),
    quantityShift :v.optional( v.number()),
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
    stockCode : v.string(),
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


const stock = defineTable(Stock).index('by_articleCode',['articleCode'])

const affectations = defineTable(Affectations)
const affectationPermisions = defineTable(AffectationPermisions)
const groupsPermissions = defineTable(GroupsPermissions)

const sessions = defineTable(Sessions).index('by_active',['active'])

const sessionGroups = defineTable(SessionGroups)
const sessionWorkers = defineTable(SessionWorkers)

const inventory = defineTable(Inventory).index('by_articleCode',['articleCode'])

const sessionRecord = defineTable(SessionRecord).index("by_sessionId",['sessionId'])


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