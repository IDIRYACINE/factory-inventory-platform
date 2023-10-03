
import SessionWorkerPanelNew from "@/components/sessionWorkers/SessionWorkerPanelNew";



export default function SessionWorkerNewPage() {

    return (
        <SessionWorkerPanelNew />
    )
}


import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale