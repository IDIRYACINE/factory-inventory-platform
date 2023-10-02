
import AffectationInjector from "./AffectationInjector";
import FamilyCodesInjector from "./FamilyCodesInjector";
import InventoryInjector from "./InventoryInjector";
import SessionInjector from "./SessionInjector";
import StockInjector from "./StockInjector";
import WorkerInjector from "./WorkersInjector";
import { useLoadCacheMetadata, useLoadConvexCache, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { InjectorComponent } from "./types";
import { cacheKeys } from "@/utility/caching/db";


function InjectorsLoader() {
    const cacheMetadata = useLoadCacheMetadata()
    const convexCacheState = useLoadConvexCache()

    return (
        <>

        </>
    )
}


export default function Injectors() {
    const cacheMetadata = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (!cacheMetadata || !convexCacheState) return <InjectorsLoader />

    return (
        <>
            <AffectationInjector />
            <FamilyCodesInjector />
            < InventoryInjector />
            < SessionInjector />
            < StockInjector />
            < WorkerInjector />
        </>
    )


}



