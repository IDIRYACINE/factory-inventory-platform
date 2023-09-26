import { useAppSelector } from "@/stores/hooks"
import { selectFamilyCodes } from "@/stores/productFamily/selectors"


export const useReadFamilyCodes = () => {
    const codes = useAppSelector(selectFamilyCodes)

    return codes
}