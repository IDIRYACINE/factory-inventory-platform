import { createFamilyCodePath, createWorkersPath, editFamilyCodePath, editWorkersPath, familyCodePath } from "@/domain/routerPaths"
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { unselectFamilyCode } from "@/stores/productFamily/slice"
import { selectPanelsState } from "@/stores/settings/selectors"
import { SettingsState, setActivePanel } from "@/stores/settings/slice"
import { Id } from "@convex/_generated/dataModel"
import { useRouter } from "next/navigation"



export const usePanelNavigation = () => {
    const { panels, activePanel } = useAppSelector(selectPanelsState)

    const router = useRouter()

    const dispatch = useAppDispatch()

    const navigateToPanel = (panel: SettingsState['activePanel']) => {
        router.push(`/${panel}`)
        dispatch(setActivePanel(panel))
    }


    return {
        panels,
        activePanel,
        navigateToPanel
    }
}


export const useWorkerNavigation = () => {
    const router = useRouter()

    const navigateToNewWorker = () => {
        router.push(createWorkersPath)
    }

    const navigateToEditWorker = (id: Id<"workers">) => {
        router.push(editWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push('/')
    }

    return {
        navigateToNewWorker,
        navigateToEditWorker,
        navigateHome
    }

}

export const useProductFamilyNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewProductFamily = () => {
        router.push(createFamilyCodePath)
    }

    const navigateToEditProductFamily = (id: Id<"familyCode">) => {
        router.push(editFamilyCodePath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectFamilyCode())
        router.push(familyCodePath)
    }

    return {
        navigateToNewProductFamily,
        navigateToEditProductFamily,
        navigateHome
    }

}

export const useInventoryNavigation = () => {
    const router = useRouter()

    const navigateToNewInventory = () => {
        router.push(createFamilyCodePath)
    }

    const navigateToEditInventory = (id: Id<"inventory">) => {
        router.push(editWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push('/')
    }

    return {
        navigateToNewInventory,
        navigateToEditInventory,
        navigateHome
    }
}


export const useStockNavigation = () => {
    const router = useRouter()

    const navigateToNewStock = () => {
        router.push(createFamilyCodePath)
    }

    const navigateToEditStock = (id: Id<"stock">) => {
        router.push(editWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push('/')
    }

    return {
        navigateToNewStock,
        navigateToEditStock,
        navigateHome
    }
}

export const useHistoryNavigation = () => {
    const router = useRouter()

    const navigateToNewHistory = () => {
        router.push(createFamilyCodePath)
    }

    const navigateToEditHistory = (id: Id<"sessionRecord">) => {
        router.push(editWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push('/')
    }

    return {
        navigateToNewHistory,
        navigateToEditHistory,
        navigateHome
    }
}