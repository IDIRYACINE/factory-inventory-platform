import { PermissionPanel } from "@/components/userPermissions/PermissionsPanel";

export default function AffectationsPage() {
    return (
        <PermissionPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale