
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheWorkers, useCacheWorkers, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadWorkers } from "@/hooks/useWorkers";


const ReadFromCache = () => {

    useLoadCacheWorkers()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const workers = useLoadWorkers()

    const updateCache = useCacheWorkers()

    if (workers) {
        updateCache({
            items: workers,
            version: convexCacheState[cacheKeys.workersVersion],
            _id: cacheKeys.workersVersion
        })
    }

    return <></>
}

export default function WorkersInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>

    if (convexCacheState[cacheKeys.workersVersion] === browserCache[cacheKeys.workersVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}