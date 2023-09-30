'use client'

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectFamilyCode, selectFamilyCodesPaginated } from "@/stores/productFamily/selectors"
import { loadFamilyCodes, setFamilyCodes } from "@/stores/productFamily/slice"
import { displayMessage } from "@/stores/settings/slice"
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import useTranslation from "next-translate/useTranslation"
import { useEffect } from "react"


export const useReadFamilyCodes = () => {
    const codes = useAppSelector(selectFamilyCodesPaginated)

    return codes
}

export const useReadFamilyCode = (args: { id?: Id<"familyCode"> }) => {
    const family = useAppSelector(selectFamilyCode)

    return family
}

export const useLoadFamilyCodes = () => {
    const results = useQuery(api.productFamily.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results && results.length > 0) {
            dispatch(loadFamilyCodes(results))
        }
    }, [dispatch, results])

    return results
}

type CreateFamilyCodeArgs = Omit<Doc<'familyCode'>, '_id' | '_creationTime'>

export const useCreateFamilyCode = () => {


    const create = useMutation(api.productFamily.create)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('messages')

    const handleCreate = ({ code, name }: CreateFamilyCodeArgs) => {
        create({ familyCode: { code, name } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'

            dispatch(displayMessage({ message: t(message), type: type }))

        })
    }

    return handleCreate

}

type UpdateFamilyCodeArgs = Partial<CreateFamilyCodeArgs> & { id: Id<"familyCode"> }
export const useUpdateFamilyCode = () => {


    const update = useMutation(api.productFamily.update)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('messages')

    const handleUpdate = ({ id, code, name }: UpdateFamilyCodeArgs) => {
        update({ id, code, name }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'

            dispatch(displayMessage({ message: t(message), type: type }))

        })
    }

    return handleUpdate
}

