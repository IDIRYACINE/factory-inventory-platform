import { StockPanel } from "@/components/stock/StockPanel";
import StateLoader from "@/lib/StateLoaders/StateLoader";
import StockInjector from "@/lib/StateLoaders/StockInjectory";

export default function StockPage() {
    return (
        <>
            <StateLoader injector={<StockInjector />} />
            <StockPanel />
        </>
    )
}