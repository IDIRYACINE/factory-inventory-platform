import { HistoryPanel } from "@/components/sessionRecords/RecordHistoryPanel";

export default function HistoryPage() {
    return (
        <HistoryPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale