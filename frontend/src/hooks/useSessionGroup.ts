import { selectActiveGroup, selectGroups } from "@/stores/groups/selectors"
import { setSessionGroups } from "@/stores/groups/slice"
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react"
import { useEffect } from "react"


export const useReadSessionGroups = () => {
    const  groups = useAppSelector(selectGroups)

    return groups
}

export const useReadSessionGroup = () => {
    const group = useAppSelector(selectActiveGroup)

    return group
}


export const useLoadSessionGroups = () => {
    const res = useQuery(api.sessionGroup.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (res?.group && res.group.length > 0) {
            dispatch(setSessionGroups(res.group))
        }
    }, [dispatch,res])

    return res?.group ?? []
}

type CreateSessionGroupsArgs = Omit<Doc<"sessionGroups">,"_id" |"_creationTime"|"supervisorTokenIdentifier">

export const useCreateSessionGroup = () => {


    const create = useMutation(api.sessionGroup.create)

    const handleCreate = ({ sessionId,groupName,supervisorId }: CreateSessionGroupsArgs) => {
        create({ sessionGroups: { sessionId,groupName,supervisorId } })
    }

    return handleCreate

}

type UpdateSessionGroupsArgs = Partial<Omit<CreateSessionGroupsArgs,'supervisorId'>> & {id:Id<"sessionGroups">}
export const useUpdateSessionGroup = () => {


    const update = useMutation(api.sessionGroup.update)

    const handleUpdate = ({ id, sessionId,groupName }:UpdateSessionGroupsArgs) => {
        update({ id, sessionGroups:{sessionId,groupName} })
    }

    return handleUpdate
}
