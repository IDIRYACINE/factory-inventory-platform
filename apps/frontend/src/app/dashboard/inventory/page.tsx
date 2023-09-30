import { InventoryPanel } from "@/components/inventory/InventoryPanel";
import InventoryInjector from "@/lib/StateLoaders/InventoryInjector";
import StateLoader from "@/lib/StateLoaders/StateLoader";

export default function InventoryPage() {
    return (
        <>
            <StateLoader injector={<InventoryInjector/>}/>
            <InventoryPanel />
        </>
    )
}