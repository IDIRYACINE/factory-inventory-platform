import { selectActiveGroup, selectGroups } from "@/stores/groups/selectors"
import { setSessionGroups } from "@/stores/groups/slice"
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react"
import { useEffect } from "react"
import { useReadActiveSession } from "./useSession"
import { useTranslation } from 'next-i18next'
    ;
import { displayMessage } from "@/stores/settings/slice"


export const useReadSessionGroups = () => {
    const groups = useAppSelector(selectGroups)

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
    }, [dispatch, res])

    return res?.group ?? []
}

type CreateSessionGroupsArgs = Omit<Doc<"sessionGroups">, "_id" | "_creationTime" | "supervisorTokenIdentifier" | "supervisorId">

export const useCreateSessionGroup = () => {


    const create = useMutation(api.sessionGroup.create)
    const session = useReadActiveSession()
    const dispatch = useAppDispatch()
    const { t } = useTranslation('common')

    const handleCreate = ({ groupName }: CreateSessionGroupsArgs) => {
        create({ sessionGroups: { sessionId: session!._id, groupName } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleCreate

}

type UpdateSessionGroupsArgs = Partial<Omit<CreateSessionGroupsArgs, 'supervisorId'>> & { id: Id<"sessionGroups"> }
export const useUpdateSessionGroup = () => {


    const update = useMutation(api.sessionGroup.update)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('common')

    const handleUpdate = ({ id, sessionId, groupName }: UpdateSessionGroupsArgs) => {
        update({ id, sessionGroups: { sessionId, groupName } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleUpdate
}
