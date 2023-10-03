import PermissionNewPanel from "@/components/userPermissions/PermissionsNewPanel";


export default function GrantUserPermissions() {


    return (
        <PermissionNewPanel />
    )
}
import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale