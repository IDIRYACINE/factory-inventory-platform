'use client'

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectStocks, selectStock } from "@/stores/stock/selectors";
import { loadStocks } from "@/stores/stock/slice";
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, usePaginatedQuery } from "convex/react";
import { useEffect } from "react"


export const useReadStocks = () => {
    const codes = useAppSelector(selectStocks)

    return codes
}

export const useReadstock = (args:{id?:Id<"stock">}) => {
    const stock = useAppSelector(selectStock)

    return stock
}

export const useLoadstock = () => {
    const { results, status, loadMore } = usePaginatedQuery(api.stock.load, {}, { initialNumItems: 50 })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results.length > 0) {
            dispatch(loadStocks(results))
        }
    }, [dispatch, results])

    return { status, loadMore }
}

type CreatestockArgs = Omit<Doc<"stock">,"_id" |"_creationTime">

export const useCreateStock = () => {


    const create = useMutation(api.stock.create)

    const handleCreate = ({ familyCode, articleName,articleCode,unit,quantity }: CreatestockArgs) => {
        create({ stock: { familyCode, articleName,articleCode,unit,quantity } })
    }

    return handleCreate

}

type UpdatestockArgs = Partial<CreatestockArgs> & {id:Id<"stock">}
export const useUpdateStock = () => {


    const update = useMutation(api.stock.update)

    const handleUpdate = ({ id, familyCode, articleName,articleCode,unit,quantity }:UpdatestockArgs) => {
        update({ id, stock:{familyCode, articleName,articleCode,unit,quantity} })
    }

    return handleUpdate
}

