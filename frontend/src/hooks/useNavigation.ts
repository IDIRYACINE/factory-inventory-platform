import { affectationPermisionsPath, affectationsPath, createAffectationsPath, createFamilyCodePath, createSessionGroupsPath, createSessionWorkersPath, createUserPath, createWorkersPath, editAffectationsPath, editFamilyCodePath, editSessionGroupsPath, editSessionWorkersPath, editUserPath, editWorkersPath, familyCodePath, sessionWorkersPath, sessionsPath, userPath } from "@/domain/routerPaths"
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

export const useSessionGroupNavigation = () => {
    const router = useRouter()

    const navigateToNewSessionGroup = () => {
        router.push(createSessionGroupsPath)
    }

    const navigateToEditSessionGroup = (id: Id<"sessionGroups">) => {
        router.push(editSessionGroupsPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push(sessionsPath)
    }

    return {
        navigateToNewSessionGroup,
        navigateToEditSessionGroup,
        navigateHome
    }
}


export const useAffectationNavigation = () => {
    const router = useRouter()

    const navigateToNewAffectation = () => {
        router.push(createAffectationsPath)
    }

    const navigateToEditAffectation = (id: Id<"affectations">) => {
        router.push(editAffectationsPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push(affectationsPath)
    }

    return {
        navigateToNewAffectation,
        navigateToEditAffectation,
        navigateHome
    }


}

export const useSessionWorkerNavigation = () => {
    const router = useRouter()

    const navigateToNewSessionWorker = () => {
        router.push(createSessionWorkersPath)
    }

    const navigateToEditSessionWorker = (id: Id<"sessionWorkers">) => {
        router.push(editSessionWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push(sessionWorkersPath)
    }

    return {
        navigateToNewSessionWorker,
        navigateToEditSessionWorker,
        navigateHome
    }
}


export const useUserNavigation = () => {
    const router = useRouter()

    const navigateToNewUser = () => {
        router.push(createUserPath)
    }

    const navigateToEditUser = (id: Id<"user">) => {
        router.push(editUserPath.replace(':id', id))
    }

    const navigateHome = () => {
        router.push(userPath)
    }

    const navigatePermissions = () => {
        router.push(affectationPermisionsPath)
    }

    return {
        navigateToNewUser,
        navigateToEditUser,
        navigateHome,
        navigatePermissions
    }
}


export const usePermissionsNavigation = () => {

    const router = useRouter()

    const navigateHome = () => {
        router.push(userPath)
    }

    return {
        navigateHome
    }
}