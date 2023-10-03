import { WorkersPanel } from "@/components/workers/WorkersPanel";

export default function WorkersPage() {
    return (
        <>
            <WorkersPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale