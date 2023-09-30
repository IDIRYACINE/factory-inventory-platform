'use client'

import { selectActivePermission, selectActiveUser, selectUserPermissions, selectUsers } from "@/stores/users/selectors";
import { loadUsers, selectPermission, selectUser, setUserPermissions, setUsers, unselectPermission, unselectUser } from "@/stores/users/slice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation,  useQuery } from "convex/react";
import { useEffect } from "react"


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
            dispatch(setUsers(res.users))
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

    const handleGrant = ({ affectationCode }: PermissionArgs) => {
        grant({ affectationPermision:{ affectationCode} })
    }

    return handleGrant
}


export const useRevokePermission = () => {
    const revoke = useMutation(api.permissions.revoke)
    const selectedPermission = useAppSelector(selectActivePermission)

    const dispatch = useAppDispatch()

    const handleRevoke = () => {

        const id = selectedPermission?._id
        if(!id) return

        revoke({ id })
        dispatch(unselectPermission())
    }

    return handleRevoke
}

export const useLoadUserPermissions = () => {

    const res = useQuery(api.permissions.load)

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

export const useSelectUser = () => {
    const dispatch = useAppDispatch()

    return {
        selectUser :(user:Doc<"user">) => dispatch(selectUser(user)),
        unSelectUser :() => dispatch(unselectUser())
    }
}

export const useSelectPermission = () => {
    const dispatch = useAppDispatch()

    return {
        selectPermission :(permission:Doc<"affectationPermisions">) => dispatch(selectPermission(permission)),
        unSelectPermission :() => dispatch(unselectPermission())
    }
}