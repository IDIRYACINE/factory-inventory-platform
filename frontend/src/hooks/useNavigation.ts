import { createWorkersPath, editWorkersPath } from "@/domain/routerPaths"
import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import {  selectPanelsState } from "@/stores/settings/selectors"
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

    const navigateToEditWorker = (id:Id<"workers">) => {
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