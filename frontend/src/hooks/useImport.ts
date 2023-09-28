import { api } from "@convex/_generated/api"
import { Doc } from "@convex/_generated/dataModel"
import { RcFile } from "antd/es/upload"
import { useMutation } from "convex/react"


type ImportSourceArgs = RcFile[]

type CreationOmits = '_id' | '_creationTime'
type ImportInventoryArgs = Omit<Doc<'inventory'>, CreationOmits>[]
export const useImportInventory = () => {
    const importData = useMutation(api.importData.importInventory)

    const handleImport = (sources: ImportSourceArgs) => {


        if (sources.length === 0) return

        sources[0].text().then((text) => {
            importData({ data: JSON.parse(text) })
        })

    }

    return handleImport

}

type ImportStockArgs = Omit<Doc<'stock'>, CreationOmits>[]
export const useImportStock = () => {
    const importData = useMutation(api.importData.importStock)

    const handleImport = (sources: ImportSourceArgs) => {


        if (sources.length === 0) return

        sources[0].text().then((text) => {
            importData({ data: JSON.parse(text) })
        })

    }

    return handleImport

}

type ImportFamilyCodeArgs = Omit<Doc<'familyCode'>, CreationOmits>[]
export const useImportFamilyCodes = () => {
    const importData = useMutation(api.importData.importFamilyCode)

    const handleImport = (sources: ImportSourceArgs) => {

        if (sources.length === 0) return

        sources[0].text().then((text) => {
            importData({ data: JSON.parse(text) })
        })


    }

    return handleImport

}

type importAffectationArgs = Omit<Doc<'affectations'>, CreationOmits>[]

export const useImportAffectation = () => {
    const importData = useMutation(api.importData.importAffectation)

    const handleImport = (sources: ImportSourceArgs) => {


        if (sources.length === 0) return

        sources[0].text().then((text) => {
            importData({ data: JSON.parse(text) })
        })

    }

    return handleImport

}


export const useDataImports = () => {
    const importInventory = useImportInventory()
    const importStock = useImportStock()
    const importFamilyCode = useImportFamilyCodes()
    const importAffectation = useImportAffectation()

    return {
        importInventory,
        importStock,
        importFamilyCode,
        importAffectation
    }
}