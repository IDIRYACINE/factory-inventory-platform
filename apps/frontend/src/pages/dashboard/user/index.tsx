import { UsersPanel } from "@/components/users/UserPanel";

export default function UsersPage() {
    return (
        <>
            <UsersPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale