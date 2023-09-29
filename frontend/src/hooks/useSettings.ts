import { selectImpportingStatus } from "@/stores/settings/selectors"
import { useSelector } from "react-redux"



export const useReadImportingStatus = () => {
    const { importingAffectations, importingFamilyCode, importingInventory, importingStock } = useSelector(selectImpportingStatus)


    return { importingAffectations, importingFamilyCode, importingInventory, importingStock }
}