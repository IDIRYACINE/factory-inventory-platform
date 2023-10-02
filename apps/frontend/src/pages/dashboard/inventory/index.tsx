import { InventoryPanel } from "@/components/inventory/InventoryPanel";
import { GetServerSideProps } from "next/types";

export default function InventoryPage() {
    return (
        <>
            <InventoryPanel />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {

    return { props: {} }
}