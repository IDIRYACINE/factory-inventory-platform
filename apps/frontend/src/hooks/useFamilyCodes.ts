'use client'

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectFamilyCode, selectFamilyCodes } from "@/stores/productFamily/selectors"
import { loadFamilyCodes, setFamilyCodes } from "@/stores/productFamily/slice"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, usePaginatedQuery } from "convex/react";
import { useEffect } from "react"


export const useReadFamilyCodes = () => {
    const codes = useAppSelector(selectFamilyCodes)

    return codes
}

export const useReadFamilyCode = (args:{id?:Id<"familyCode">}) => {
    const family = useAppSelector(selectFamilyCode)

    return family
}

export const useLoadFamilyCodes = () => {
    const { results, status, loadMore } = usePaginatedQuery(api.productFamily.load, {}, { initialNumItems: 50 })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results.length > 0) {
            dispatch(loadFamilyCodes(results))
        }
    }, [dispatch, results])

    return { status, loadMore }
}

type CreateFamilyCodeArgs = Omit<Doc<'familyCode'>,'_id'|'_creationTime'>

export const useCreateFamilyCode = () => {


    const create = useMutation(api.productFamily.create)

    const handleCreate = ({ code, name }: CreateFamilyCodeArgs) => {
        create({ familyCode: { code, name } })
    }

    return handleCreate

}

type UpdateFamilyCodeArgs = Partial<CreateFamilyCodeArgs> & {id:Id<"familyCode">}
export const useUpdateFamilyCode = () => {


    const update = useMutation(api.productFamily.update)

    const handleUpdate = ({ id, code, name }:UpdateFamilyCodeArgs) => {
        update({ id, code, name })
    }

    return handleUpdate
}
