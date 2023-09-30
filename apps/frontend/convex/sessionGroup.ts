import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { isAuthenticated } from "./helpers/isAuthenticated";
import { codeNotAuthenticated } from "./helpers/statusCodes";
import { paginationOptsValidator } from "convex/server";
import { SessionGroups,  } from "./schema";
import { SessionGroupsOptional } from "./helpers/updateHelpers";
import { SessionGroupsCreate } from "./helpers/createHelpers";



export const load = query({
    args: {  },
    handler: async (ctx, args) => {

        if(!isAuthenticated(ctx.auth)){
            return { code: codeNotAuthenticated}
        }

        const supervisorId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

        
        if(supervisorId){
            let group = await ctx.db.query('sessionGroups')
            .withIndex("by_supervisorTokenIdentifier",(q) => q.eq('supervisorTokenIdentifier', supervisorId))
            .collect();

            return {group}
        }



        let group =  await ctx.db.query('sessionGroups').collect()
        return {group}

    }
})


export const create = mutation({
    args: {sessionGroups:v.object(SessionGroupsCreate)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const group = {
            ...args.sessionGroups,
            supervisorTokenIdentifier: (await ctx.auth.getUserIdentity())!.tokenIdentifier
        }

        const data = await ctx.db.insert('sessionGroups',group)

        return {groupId:data}
    }

})


export const update = mutation({
    args: {id :v.id("sessionGroups") ,sessionGroups:v.object(SessionGroupsOptional)},
    handler: async (ctx, args) => {

        const authenticated = await isAuthenticated(ctx.auth)

        if (!authenticated) {
            return { code: codeNotAuthenticated }
        }

        const data = await ctx.db.patch(args.id,args.sessionGroups)

        return {groupId:args.id}
    }

})