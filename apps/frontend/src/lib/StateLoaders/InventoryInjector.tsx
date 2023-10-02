
import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheInventory, useLoadCacheInventory, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { useLoadInventory } from "@/hooks/useInventory";



const ReadFromCache = () => {

    useLoadCacheInventory()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const inventory = useLoadInventory()

    const updateCache = useCacheInventory()

    if (inventory) {
        updateCache({
            items: inventory,
            version: convexCacheState[cacheKeys.inventoryVersion],
            _id: cacheKeys.inventoryVersion
        })
    }

    return <></>
}

export default function InventoryInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>

    if (convexCacheState[cacheKeys.inventoryVersion] === browserCache[cacheKeys.inventoryVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}