

import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { displayMessage } from "@/stores/settings/slice";
import { selectStocksPaginated, selectStock } from "@/stores/stock/selectors";
import { loadStocks } from "@/stores/stock/slice";
import { api } from "@convex/_generated/api"
import { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation, usePaginatedQuery, useQuery } from "convex/react";
import { useTranslation } from 'next-i18next'
    ;
import { useEffect } from "react"


export const useReadStocks = () => {
    const codes = useAppSelector(selectStocksPaginated)

    return codes
}

export const useReadstock = (args: { id?: Id<"stock"> }) => {
    const stock = useAppSelector(selectStock)

    return stock
}

export const useLoadStock = () => {
    const results = useQuery(api.stock.load)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results && results.length > 0) {
            dispatch(loadStocks(results))
        }
    }, [dispatch, results])

    return results
}

type CreatestockArgs = Omit<Doc<"stock">, "_id" | "_creationTime">

export const useCreateStock = () => {


    const create = useMutation(api.stock.create)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('common')
    const handleCreate = ({ familyCode, articleName, articleCode }: CreatestockArgs) => {
        create({ stock: { familyCode, articleName, articleCode } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleCreate

}

type UpdatestockArgs = Partial<CreatestockArgs> & { id: Id<"stock"> }
export const useUpdateStock = () => {


    const update = useMutation(api.stock.update)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('common')

    const handleUpdate = ({ id, familyCode, articleName, articleCode }: UpdatestockArgs) => {
        update({ id, stock: { familyCode, articleName, articleCode } }).then((res) => {
            const message = res.code ? 'fail' : 'sucess'
            const type = res.code ? 'error' : 'success'
            dispatch(displayMessage({ message: t(message), type: type }))
        })
    }

    return handleUpdate
}

