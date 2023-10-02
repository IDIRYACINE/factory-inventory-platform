

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectInventoriesPaginated, selectInventory } from "@/stores/inventory/selectors";
import { loadInventories } from "@/stores/inventory/slice";
import { displayMessage } from "@/stores/settings/slice";
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react"


export const useReadInventories = () => {
    const codes = useAppSelector(selectInventoriesPaginated)

    return codes
}

export const useReadInventory = (args: { id?: Id<"inventory"> }) => {
    const inventory = useAppSelector(selectInventory)

    return inventory
}

export const useLoadInventory = () => {
    const results = useQuery(api.inventory.load,)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results?.inventory && results!.inventory.length > 0) {
            dispatch(loadInventories(results.inventory))
        }
    }, [dispatch, results])

    return results?.inventory
}

type CreateInventoryArgs = Omit<Doc<"inventory">, "_id" | "_creationTime">

export const useCreateInventory = () => {


    const create = useMutation(api.inventory.create)
    const dispatch = useAppDispatch()
    const { t } = useTranslation("common")

    const handleCreate = ({ familyCode, articleName, articleCode, unit, stockCode, affectationCode }: CreateInventoryArgs) => {
        create({ inventory: { familyCode, articleName, articleCode, unit, stockCode, affectationCode } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'

            dispatch(displayMessage({ message: t(message), type: type }))

        })
    }

    return handleCreate

}

type UpdateInventoryArgs = Partial<CreateInventoryArgs> & { id: Id<"inventory"> }
export const useUpdateInventory = () => {


    const update = useMutation(api.inventory.update)
    const dispatch = useAppDispatch()
    const { t } = useTranslation("common")

    const handleUpdate = ({ id, familyCode, articleName, articleCode, unit, affectationCode }: UpdateInventoryArgs) => {
        update({ id, inventory: { familyCode, articleName, articleCode, unit, affectationCode } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'

            dispatch(displayMessage({ message: t(message), type: type }))

        })
    }

    return handleUpdate
}

