

import { affectationPermisionsPath, affectationsPath, createAffectationPermisionsPath, createAffectationsPath, createFamilyCodePath, createInventoryPath, createSessionGroupsPath, createSessionWorkersPath, createStockPath, createUserPath, createWorkersPath, editAffectationsPath, editFamilyCodePath, editInventoryPath, editSessionGroupsPath, editSessionWorkersPath, editStockPath, editUserPath, editWorkersPath, familyCodePath, importsPath, inventoryPath, sessionGroupsPath, sessionWorkersPath, sessionsPath, stockPath, userPath, workersPath } from "@/domain/routerPaths"
import { unselectAffecation } from "@/stores/affectations/slice"
import { resetActiveGroup } from "@/stores/groups/slice"
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { unselectInventor } from "@/stores/inventory/slice"
import { unselectFamilyCode } from "@/stores/productFamily/slice"
import { selectPanelsState } from "@/stores/settings/selectors"
import { SettingsState, setActivePanel } from "@/stores/settings/slice"
import { unselectStock } from "@/stores/stock/slice"
import { unselectUser } from "@/stores/users/slice"
import { unselectWorker } from "@/stores/workers/slice"
import { Id } from "@convex/_generated/dataModel"
import { useRouter } from "next/navigation"



export const usePanelNavigation = () => {
    const { panels, activePanel } = useAppSelector(selectPanelsState)

    const router = useRouter()

    const dispatch = useAppDispatch()

    const panelNavigationMap = {
        workers: workersPath,
        familyCode: familyCodePath,
        inventory: inventoryPath,
        stock: stockPath,
        sessions: sessionsPath,
        sessionWorkers: sessionWorkersPath,
        sessionGroups: sessionsPath,
        affectations: affectationsPath,
        users: userPath,
        permissions: affectationPermisionsPath
    }

    const navigateToPanel = (panel: SettingsState['activePanel']) => {
        router.push(`/dashboard/${panel}`)
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
    const dispatch = useAppDispatch()

    const navigateToNewWorker = () => {
        router.push(createWorkersPath)
    }

    const navigateToEditWorker = (id: Id<"workers">) => {
        router.push(editWorkersPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectWorker())
        router.push(workersPath)
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
    const dispatch = useAppDispatch()

    const navigateToNewInventory = () => {
        router.push(createInventoryPath)
    }

    const navigateToEditInventory = (id: Id<"inventory">) => {
        router.push(editInventoryPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectInventor())
        router.push(inventoryPath)
    }

    return {
        navigateToNewInventory,
        navigateToEditInventory,
        navigateHome
    }
}


export const useStockNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewStock = () => {
        router.push(createStockPath)
    }

    const navigateToEditStock = (id: Id<"stock">) => {
        router.push(editStockPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectStock())
        router.push(stockPath)
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
    const dispatch = useAppDispatch()

    const navigateToNewSessionGroup = () => {
        router.push(createSessionGroupsPath)
    }

    const navigateToEditSessionGroup = (id: Id<"sessionGroups">) => {
        router.push(editSessionGroupsPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(resetActiveGroup())
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

    const dispatch = useAppDispatch()

    const navigateToNewAffectation = () => {
        router.push(createAffectationsPath)
    }

    const navigateToEditAffectation = (id: Id<"affectations">) => {
        router.push(editAffectationsPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectAffecation)
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

    const navigateSession = () => {
        router.push(sessionsPath)
    }

    return {
        navigateToNewSessionWorker,
        navigateToEditSessionWorker,
        navigateHome,
        navigateSession
    }
}


export const useUserNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewUser = () => {
        router.push(createUserPath)
    }

    const navigateToEditUser = (id: Id<"user">) => {
        router.push(editUserPath.replace(':id', id))
    }

    const navigateHome = () => {
        dispatch(unselectUser())
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
        router.push(affectationPermisionsPath)
    }

    const navigateGrantPermission = () => {
        router.push(createAffectationPermisionsPath)
    }

    const navigateUsers = () => {
        router.push(userPath)
    }

    return {
        navigateUsers,
        navigateHome,
        navigateGrantPermission
    }
}

export const useSessionNavigation = () => {

    const router = useRouter()

    const navigateHome = () => {
        router.push(sessionsPath)
    }

    const navigateSessionWorkers = () => {
        router.push(sessionWorkersPath)
    }

    const navigateSessionGroups = () => {
        router.push(sessionGroupsPath)
    }

    return {
        navigateHome,
        navigateSessionWorkers,
        navigateSessionGroups
    }
}


export const useSettingsNavigation = () => {

    const router = useRouter()

    const navigateHome = () => {
        router.push(sessionsPath)
    }

    const navigateUsers = () => {
        router.push(userPath)
    }

    const navigateImports = () => {
        router.push(importsPath)
    }

    return {
        navigateHome,
        navigateUsers,
        navigateImports
    }
}