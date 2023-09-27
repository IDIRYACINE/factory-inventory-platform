import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectWorkers } from "@/stores/workers/selectors"
import { setWorkers } from "@/stores/workers/slice";
import { api } from "@convex/_generated/api";
import { Doc, Id } from "@convex/_generated/dataModel";
import { useAction, useMutation, useQuery } from "convex/react";
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
    
    return data
}

type CreateWorkerArgs = Omit<Doc<"workers">,"_id" |"_creationTime">

export const useCreateWorker = () => {


    const create = useMutation(api.workers.create)

    const handleCreate = ({ name,phone }: CreateWorkerArgs) => {
        create({ worker: { name,phone } })
    }

    return handleCreate

}

type UpdateWorkerArgs = Partial<CreateWorkerArgs> & {id:Id<"workers">}
export const useUpdateWorker = () => {


    const update = useMutation(api.workers.update)

    const handleUpdate = ({ id, name,phone }:UpdateWorkerArgs) => {
        update({ id, worker:{name,phone} })
    }

    return handleUpdate
}

