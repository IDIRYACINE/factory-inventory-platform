import SessionWorkerPanel from "@/components/sessionWorkers/SessionWorkerPanel";


export default function SessionWorkersPage() {
    return (
        <>
            <SessionWorkerPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale