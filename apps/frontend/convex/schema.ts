import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";



export const Workers = {
    name: v.string(),
    phone: v.string(),
}


export const FamilyCode = {
    code: v.number(),
    name: v.string(),
}

export const ScannedArticles = {
    articleCode: v.number(),
}

export const MissingArticles = {
    articleCode: v.number(),
}

export const User = {
    name: v.string(),
    tokenIdentifier: v.string(),
    role: v.string(),
}

export const Stock = {
    articleName: v.string(),
    articleCode: v.number(),
    familyCode : v.number(),
}

export const Affectations = {
    affectationCode: v.string(),
    affectationName: v.string(),
}

export const AffectationPermisions = {
    tokenIdentifier : v.string(),
    affectationCode : v.string(),
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
    supervisorTokenIdentifier : v.string(),
}


export const SessionWorker = {
    groupId : v.id('sessionGroups'),
    workerId : v.id('workers'),
    username : v.string(),
    password : v.string(),

}

export const Inventory = {
    articleCode : v.number(),
    articleName : v.string(),
    affectationCode: v.string(),
    unit : v.number(),
    familyCode : v.number(),
    stockCode : v.number(),
}

export const SessionRecord = {
    sessionId : v.id('sessions'),
    workerId : v.id('workers'),
    groupId : v.id('sessionGroups'),
    workerName : v.string(),
    articleName : v.string(),
    articleCode : v.number(),
    price: v.number(),
    affectationCode : v.string(),
}

export const MissingSessionRecord = {
    articleName : v.string(),
    articleCode : v.number(),
    price: v.number(),
    affectationCode : v.string(),
}

export const Cache = {
    name : v.string(),
    version : v.number(),
}

const workers = defineTable(Workers)

const familyCode = defineTable(FamilyCode).index('by_code', ['code'])

const scannedArticles = defineTable(ScannedArticles).index('by_code',['articleCode'])

const missingArticles = defineTable(MissingArticles).index('by_code',['articleCode'])

const user = defineTable(User).index('by_tokenIdentifier',['tokenIdentifier'])


const stock = defineTable(Stock).index('by_articleCode',['articleCode']).index('by_familyCode',['familyCode'])

const affectations = defineTable(Affectations).index('by_affectationCode',['affectationCode'])

const affectationPermisions = defineTable(AffectationPermisions).index("by_tokenIdentifer_affectationCode",["tokenIdentifier","affectationCode"])

const groupsPermissions = defineTable(GroupsPermissions)

const sessions = defineTable(Sessions).index('by_active',['active'])

const sessionGroups = defineTable(SessionGroups).index('by_supervisorTokenIdentifier',['supervisorTokenIdentifier'])

const sessionWorkers = defineTable(SessionWorker).index('by_username_password',['username','password']).index('by_workerId',['workerId'])

const inventory = defineTable(Inventory).index('by_articleCode',['articleCode'])
.index('by_familyCode',['familyCode']).index('by_stockCode',['stockCode'])
.index('by_affecationCode',['affectationCode'])

const sessionRecord = defineTable(SessionRecord).index("by_sessionId_code",['sessionId','articleCode']).index("by_sessionId",['sessionId']).index("by_workerId",['workerId'])

const missingSessionRecord = defineTable(MissingSessionRecord)

const cache = defineTable(Cache)

export default defineSchema({
    workers,
    familyCode,
    scannedArticles,
    missingArticles,
    user,
    stock,
    affectations,
    affectationPermisions,
    groupsPermissions,
    sessions,
    sessionGroups,
    sessionWorkers,
    missingSessionRecord,
    inventory,
    sessionRecord,
    cache
});