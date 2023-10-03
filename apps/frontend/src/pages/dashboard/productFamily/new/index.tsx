import FamilyCodeNewPanel from "@/components/familyCodes/FamilyCodeNewPanel";


export default function ProductFamilyNewPage() {
    return (
        <FamilyCodeNewPanel />
    )
}


import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale