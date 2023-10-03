import { InventoryPanel } from "@/components/inventory/InventoryPanel";
import { GetServerSideProps } from "next/types";

export default function InventoryPage() {
    return (
        <>
            <InventoryPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale