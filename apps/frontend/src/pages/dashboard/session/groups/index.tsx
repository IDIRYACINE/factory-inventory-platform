
import SessionGroupPanel from "@/components/sessionGroups/SessionGroupPanel";


export default function SessionGroupsPage() {

    return (
        <SessionGroupPanel />
    )
}


import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale