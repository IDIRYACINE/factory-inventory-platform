'use client'

import { selectActiveUser, selectUserPermissions, selectUsers } from "@/stores/users/selectors";
import { loadUsers, setUserPermissions } from "@/stores/users/slice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation,  useQuery } from "convex/react";
import { useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export const useReadUsers = () => {
    const users = useAppSelector(selectUsers)

    return users
}

export const useReadUser = (args:{id?:Id<"user">}) => {
    const user = useAppSelector(selectActiveUser)

    return user
}

export const useLoadUsers = () => {
    const res = useQuery(api.user.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (res?.users && res.users.length > 0) {
            dispatch(loadUsers(res.users))
        }
    }, [dispatch, res])

    return res
}

type CreateUserArgs = Omit<Doc<"user">,'_id' | '_creationTime'>

export const useCreateUser = () => {


    const create = useMutation(api.user.create)

    const handleCreate = ({ name,role,tokenIdentifier }: CreateUserArgs) => {
        create({ user: { name,role,tokenIdentifier  } })
    }

    return handleCreate

}

type UpdateUserArgs = Partial<Omit<CreateUserArgs,"tokenIdentifer">> & {id:Id<"user">}
export const useUpdateUser = () => {


    const update = useMutation(api.user.update)

    const handleUpdate = ({ id, name,role, }:UpdateUserArgs) => {
        update({ id, user: { name,role,  }  })
    }

    return handleUpdate
}


type PermissionArgs = Omit<Doc<"affectationPermisions">,"_id" | "_creationTime" >
export const useGrantPermission = () => {
    const grant = useMutation(api.permissions.grant)

    const handleGrant = ({ affectationId, userId }: PermissionArgs) => {
        grant({ affectationPermision:{ affectationId, userId} })
    }

    return handleGrant
}


export const useRevokePermission = () => {
    const revoke = useMutation(api.permissions.revoke)

    const handleRevoke = (id:Id<"affectationPermisions">) => {
        revoke({ id })
    }

    return handleRevoke
}

export const useLoadUserPermissions = () => {
    const params  = useSearchParams().get("id")
    const userId = params as Id<"user">

    const res = useQuery(api.permissions.load,{userId})

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(res?.permissions && res.permissions.length > 0){
            dispatch(setUserPermissions(res.permissions))
        }

    },[res,dispatch])

    return res
}

export const useReadUserPermissions = (args?:{userId:Id<"user">}) => {
    const permissions = useAppSelector(selectUserPermissions)

    return permissions
}