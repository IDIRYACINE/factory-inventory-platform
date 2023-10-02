import { useAppSelector } from "@/stores/hooks"
import { selectLoadingState } from "@/stores/selectors"
import { selectImpportingStatus, selectMessage } from "@/stores/settings/selectors"



export const useReadImportingStatus = () => {
    const { importingAffectations, importingFamilyCode, importingInventory, importingStock } = useAppSelector(selectImpportingStatus)


    return { importingAffectations, importingFamilyCode, importingInventory, importingStock }
}


export const useReadMessage = () => {
    const message = useAppSelector(selectMessage)

    return message

}

export const useReadLoadingState = () => {
    const loading = useAppSelector(selectLoadingState)

    return loading
}

