'use client'

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectInventories, selectInventory } from "@/stores/inventory/selectors";
import { loadInventories } from "@/stores/inventory/slice";
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, usePaginatedQuery, useQuery } from "convex/react";
import { useEffect } from "react"


export const useReadInventories = () => {
    const codes = useAppSelector(selectInventories)

    return codes
}

export const useReadInventory = (args:{id?:Id<"inventory">}) => {
    const inventory = useAppSelector(selectInventory)

    return inventory
}

export const useLoadInventory = () => {
    const results = useQuery(api.inventory.load, )

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results?.inventory && results!.inventory.length > 0) {
            dispatch(loadInventories(results.inventory))
        }
    }, [dispatch, results])

    return results
}

type CreateInventoryArgs = Omit<Doc<"inventory">,"_id" |"_creationTime">

export const useCreateInventory = () => {


    const create = useMutation(api.inventory.create)

    const handleCreate = ({ familyCode, articleName,articleCode,unit,stockCode,affectationCode }: CreateInventoryArgs) => {
        create({ inventory: { familyCode, articleName,articleCode,unit,stockCode,affectationCode } })
    }

    return handleCreate

}

type UpdateInventoryArgs = Partial<CreateInventoryArgs> & {id:Id<"inventory">}
export const useUpdateInventory = () => {


    const update = useMutation(api.inventory.update)

    const handleUpdate = ({ id, familyCode, articleName,articleCode,unit,affectationCode }:UpdateInventoryArgs) => {
        update({ id, inventory:{familyCode, articleName,articleCode,unit,affectationCode} })
    }

    return handleUpdate
}

