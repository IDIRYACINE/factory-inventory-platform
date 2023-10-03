
import ImportPanel from "@/components/settings/imports/ImportPanel";


export default function Imports() {
    return (
        <ImportPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale