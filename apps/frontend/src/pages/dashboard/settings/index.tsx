
import SettingsPanel from "@/components/settings/SettingsPanel";

export default function SettingsPage() {
    return (
        <SettingsPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale