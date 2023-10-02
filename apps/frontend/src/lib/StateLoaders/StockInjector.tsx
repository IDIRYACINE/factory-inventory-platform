
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheStock, useCacheStock, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadStock } from "@/hooks/useStock";


const ReadFromCache = () => {

    useLoadCacheStock()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const stock = useLoadStock()

    const updateCache = useCacheStock()

    if (stock) {
        updateCache({
            items: stock,
            version: convexCacheState[cacheKeys.stockVersion],
            _id: cacheKeys.stockVersion
        })
    }

    return <></>
}

export default function StockInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>


    if (convexCacheState[cacheKeys.stockVersion] === browserCache[cacheKeys.stockVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}