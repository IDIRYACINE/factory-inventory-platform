'use client'

import { selectActiveAffectation, selectAffectations } from "@/stores/affectations/selectors";
import { loadAffectations, setAffectations } from "@/stores/affectations/slice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { displayMessage } from "@/stores/settings/slice";
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import useTranslation from "next-translate/useTranslation";
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
    const results = useQuery(api.affectation.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results &&  results.affectations.length > 0) {
            dispatch(setAffectations(results.affectations))
        }
    }, [dispatch, results])

    return results
}

type CreateAffectationArgs = Omit<Doc<"affectations">,'_id' | '_creationTime'>

export const useCreateAffectation = () => {


    const create = useMutation(api.affectation.create)
    const dispatch = useAppDispatch()
    const {t} = useTranslation('messages')

    const handleCreate = ({ affectationCode, affectationName }: CreateAffectationArgs) => {
        create({ affectation: { affectationCode, affectationName  } }).then((res) => {
            if(res.code){
                dispatch(displayMessage({ message: t('fail'), type: 'error' }))
            }
            else{
                dispatch(displayMessage({ message: t('sucess'), type: 'success' }))
            }
        })
    }

    return handleCreate

}

type UpdateAffectationArgs = Omit<CreateAffectationArgs,'affectationCode'> & {id:Id<"affectations">}
export const useUpdateAffectation = () => {

    const dispatch = useAppDispatch()
    const update = useMutation(api.affectation.update)

    const {t} = useTranslation('messages')

    const handleUpdate = ({ id,  affectationName }:UpdateAffectationArgs) => {
        update({ id, affectation: {  affectationName  }  }).then((res) => {
            if(res?.code){
                dispatch(displayMessage({ message: t('updateFail'), type: 'error' }))
            }
            else{
                dispatch(displayMessage({ message: t('updateSuccess'), type: 'success' }))
            }
        })

    }

    return handleUpdate
}

