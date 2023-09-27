"use client";

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectActiveSessionWorker, selectSessionWorkers } from "@/stores/workers/selectors"
import {  setSessionWorkers } from "@/stores/workers/slice"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react"
import { useEffect } from "react"


export const useReadSessionWorkers = () => {
    const  workers = useAppSelector(selectSessionWorkers)

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
    }, [dispatch,res])

    return res?.workers ?? []
}

type CreateSessionWorkerArgs = Omit<Doc<"sessionWorkers">,"_id" |"_creationTime"|"supervisorTokenIdentifier">

export const useCreateSessionWorker = () => {


    const create = useMutation(api.sessionWorker.create)

    const handleCreate = ({ groupId,username,password,workerId }: CreateSessionWorkerArgs) => {
        create({ sessionWorker: { groupId,username,password,workerId } })
    }

    return handleCreate

}

type UpdateSessionWorkerArgs = Partial<Omit<CreateSessionWorkerArgs,'workerId'>> & {id:Id<"sessionWorkers">}
export const useUpdateSessionWorker = () => {


    const update = useMutation(api.sessionWorker.update)

    const handleUpdate = ({ id, groupId,username,password }:UpdateSessionWorkerArgs) => {
        update({ id, sessionWorker:{groupId,username,password} })
    }

    return handleUpdate
}
