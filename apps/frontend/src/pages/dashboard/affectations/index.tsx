import { AffectationsPanel } from "@/components/affectation/AffectationPanel";

export default function AffectationsPage() {
    return (
        <>
            <AffectationsPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale