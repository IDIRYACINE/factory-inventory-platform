import { v } from "convex/values";

export const SessionGroupsCreate = {
    sessionId : v.id('sessions'),
    groupName : v.string(),
    supervisorId : v.id('users'),
}
