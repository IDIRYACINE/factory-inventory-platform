import FamilyCodeNewPanel from "@/components/familyCodes/FamilyCodeNewPanel";


export default function ProductFamilyEditPage() {
    return (
        <FamilyCodeNewPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale