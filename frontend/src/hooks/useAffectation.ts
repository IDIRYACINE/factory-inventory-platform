'use client'

import { selectActiveAffectation, selectAffectations } from "@/stores/affectations/selectors";
import { loadAffectations } from "@/stores/affectations/slice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, usePaginatedQuery } from "convex/react";
import { useEffect } from "react"


export const useReadAffectations = () => {
    const codes = useAppSelector(selectAffectations)

    return codes
}

export const useReadAffectation = (args:{id?:Id<"affectations">}) => {
    const family = useAppSelector(selectActiveAffectation)

    return family
}

export const useLoadAffectations = () => {
    const { results, status, loadMore } = usePaginatedQuery(api.affectation.load, {}, { initialNumItems: 50 })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results.length > 0) {
            dispatch(loadAffectations(results))
        }
    }, [dispatch, results])

    return { status, loadMore }
}

type CreateAffectationArgs = Omit<Doc<"affectations">,'_id' | '_creationTime'>

export const useCreateAffectation = () => {


    const create = useMutation(api.affectation.create)

    const handleCreate = ({ affectationCode, affectationName }: CreateAffectationArgs) => {
        create({ affectation: { affectationCode, affectationName  } })
    }

    return handleCreate

}

type UpdateAffectationArgs = Omit<CreateAffectationArgs,'affectationCode'> & {id:Id<"affectations">}
export const useUpdateAffectation = () => {


    const update = useMutation(api.affectation.update)

    const handleUpdate = ({ id,  affectationName }:UpdateAffectationArgs) => {
        update({ id, affectation: {  affectationName  }  })
    }

    return handleUpdate
}

