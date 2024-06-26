
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectActiveSessionWorker, selectSessionWorkers } from "@/stores/workers/selectors"
import { setSessionWorkers, unselectWorker } from "@/stores/workers/slice"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react"
import { useEffect } from "react"
import { useReadActiveWorker } from "./useWorkers";
import { displayMessage } from "@/stores/settings/slice";
import { useTranslation } from 'next-i18next'
    ;


export const useReadSessionWorkers = () => {
    const workers = useAppSelector(selectSessionWorkers)

    return workers
}

export const useReadSessionWorker = () => {
    const group = useAppSelector(selectActiveSessionWorker)

    return group
}


export const useLoadSessionWorker = () => {
    const res = useQuery(api.sessionWorker.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (res?.workers && res.workers.length > 0) {
            dispatch(setSessionWorkers(res.workers))
        }
    }, [dispatch, res])

    return res?.workers ?? []
}

type CreateSessionWorkerArgs = Omit<Doc<"sessionWorkers">, "_id" | "_creationTime" | "workerId" | "supervisorTokenIdentifier">

export const useCreateSessionWorker = () => {

    const create = useMutation(api.sessionWorker.create)

    const worker = useReadActiveWorker()

    const dispatch = useAppDispatch()

    const { t } = useTranslation('common')

    const handleCreate = ({ groupId, username, password }: CreateSessionWorkerArgs) => {
        if (!worker) return
        create({ sessionWorker: { groupId, username, password, workerId: worker._id } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleCreate

}

type UpdateSessionWorkerArgs = Partial<Omit<CreateSessionWorkerArgs, 'workerId'>> & { id: Id<"sessionWorkers"> }
export const useUpdateSessionWorker = () => {


    const update = useMutation(api.sessionWorker.update)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('common')

    const handleUpdate = ({ id, groupId, username, password }: UpdateSessionWorkerArgs) => {
        update({ id, sessionWorker: { groupId, username, password } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'

            dispatch(displayMessage({ message: t(message), type: type }))

        })
    }

    return handleUpdate
}


export const useReadActiveSessionWorker = () => {
    const worker = useAppSelector(selectActiveSessionWorker)

    return worker
}

export const useLoadSessionWorkers = () => {
    const res = useQuery(api.sessionWorker.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (res?.workers && res.workers.length > 0) {
            dispatch(setSessionWorkers(res.workers))
        }
    }, [dispatch, res])

    return res?.workers ?? []
}