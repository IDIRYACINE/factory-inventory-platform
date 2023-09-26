import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectPanels, selectPanelsState } from "@/stores/settings/selectors"
import { SettingsState, setActivePanel } from "@/stores/settings/slice"
import { useRouter } from "next/navigation"



export const useNavigation = () => {
    const {panels,activePanel} = useAppSelector(selectPanelsState)

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