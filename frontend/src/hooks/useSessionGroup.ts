import { selectGroups } from "@/stores/groups/selectors"
import { useAppSelector } from "@/stores/hooks"


export const useReadSessionGroups = () => {
    const  groups = useAppSelector(selectGroups)

    return groups
}