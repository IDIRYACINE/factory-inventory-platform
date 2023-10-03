import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { displayMessage } from "@/stores/settings/slice";
import { selectLoadedWorkers, selectWorker, selectWorkers } from "@/stores/workers/selectors"
import { setWorkers } from "@/stores/workers/slice";
import { api } from "@convex/_generated/api";
import { Doc, Id } from "@convex/_generated/dataModel";
import { useAction, useMutation, useQuery } from "convex/react";
import { useTranslations } from 'next-intl';
import { useEffect } from "react";



export const useReadWorkers = () => {
    const workers = useAppSelector(selectWorkers)

    return workers
}


export const useLoadWorkers = () => {
    const data = useQuery(api.workers.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data && data.workers && data.workers!.length > 0) {
            dispatch(setWorkers(data.workers))
        }
    }, [dispatch, data])

    return data?.workers ?? []
}

type CreateWorkerArgs = Omit<Doc<"workers">, "_id" | "_creationTime">

export const useCreateWorker = () => {


    const create = useMutation(api.workers.create)
    const dispatch = useAppDispatch()
    const t = useTranslations()

    const handleCreate = ({ name, phone }: CreateWorkerArgs) => {
        create({ worker: { name, phone } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleCreate

}

type UpdateWorkerArgs = Partial<CreateWorkerArgs> & { id: Id<"workers"> }
export const useUpdateWorker = () => {


    const update = useMutation(api.workers.update)
    const dispatch = useAppDispatch()
    const t = useTranslations()

    const handleUpdate = ({ id, name, phone }: UpdateWorkerArgs) => {
        update({ id, worker: { name, phone } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleUpdate
}


export const useReadActiveWorker = () => {
    const worker = useAppSelector(selectWorker)

    return worker
}