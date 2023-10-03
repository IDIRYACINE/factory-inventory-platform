
import SessionGroupNewPanel from "@/components/sessionGroups/SessionGroupPanelNew";



export default function SessionGroupsPage() {

    return (
        <SessionGroupNewPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale