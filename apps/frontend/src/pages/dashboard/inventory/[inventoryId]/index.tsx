import InventoryNewPanel from "@/components/inventory/InventoryNewPanel";


export default function InventoryEditPage() {
    return (
        <InventoryNewPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale