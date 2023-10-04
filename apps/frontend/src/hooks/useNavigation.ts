

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
import { useRouter } from "next/router"



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


    const navigateHome = () => {
        dispatch(unselectWorker())
        router.push(workersPath)
    }

    return {
        navigateToNewWorker, navigateHome
    }
}

export const useProductFamilyNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewProductFamily = () => {
        router.push(createFamilyCodePath)
    }


    const navigateHome = () => {
        dispatch(unselectFamilyCode())
        router.push(familyCodePath)
    }

    return {
        navigateToNewProductFamily, navigateHome
    }
}

export const useInventoryNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewInventory = () => {
        router.push(createInventoryPath)
    }


    const navigateHome = () => {
        dispatch(unselectInventor())
        router.push(inventoryPath)
    }

    return {
        navigateToNewInventory,
    }
}


export const useStockNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewStock = () => {
        router.push(createStockPath)
    }


    const navigateHome = () => {
        dispatch(unselectStock())
        router.push(stockPath)
    }

    return {
        navigateToNewStock,
    }
}

export const useHistoryNavigation = () => {
    const router = useRouter()

    const navigateToNewHistory = () => {
        router.push(createFamilyCodePath)
    }


    const navigateHome = () => {
        router.push('/')
    }

    return {
        navigateToNewHistory,
    }
}

export const useSessionGroupNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewSessionGroup = () => {
        router.push(createSessionGroupsPath)
    }


    const navigateHome = () => {
        dispatch(resetActiveGroup())
        router.push(sessionsPath)

    }

    return {
        navigateToNewSessionGroup,
        navigateHome
    }
}


export const useAffectationNavigation = () => {
    const router = useRouter()

    const dispatch = useAppDispatch()

    const navigateToNewAffectation = () => {
        router.push(createAffectationsPath)
    }


    const navigateHome = () => {
        dispatch(unselectAffecation)
        router.push(affectationsPath)
    }

    return {
        navigateToNewAffectation,
        navigateHome

    }
}

export const useSessionWorkerNavigation = () => {
    const router = useRouter()

    const navigateToNewSessionWorker = () => {
        router.push(createSessionWorkersPath)
    }


    const navigateHome = () => {
        router.push(sessionWorkersPath)
    }

    const navigateSession = () => {
        router.push(sessionsPath)
    }

    return {
        navigateToNewSessionWorker,
        navigateSession,
        navigateHome
    }
}


export const useUserNavigation = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const navigateToNewUser = () => {
        router.push(createUserPath)
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