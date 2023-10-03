
import { FamilyCodePanel } from "@/components/familyCodes/FamilyCodePanel";

export default function ProductFamilyPage() {
    return (
        <>
            <FamilyCodePanel />
        </>
    )
}


import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale