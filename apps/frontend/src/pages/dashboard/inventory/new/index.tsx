import InventoryNewPanel from "@/components/inventory/InventoryNewPanel";


export default function InventoryNewPage() {

    return (
        <InventoryNewPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale