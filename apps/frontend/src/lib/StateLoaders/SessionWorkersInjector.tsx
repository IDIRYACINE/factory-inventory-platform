
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheSessionWorkers, useCacheSessionWorkers, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadSessionWorkers } from "@/hooks/useSesionWorker";


const ReadFromCache = () => {

    useLoadCacheSessionWorkers()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const sessionWorkers = useLoadSessionWorkers()

    const updateCache = useCacheSessionWorkers()

    if (sessionWorkers) {
        updateCache({
            items: sessionWorkers,
            version: convexCacheState[cacheKeys.sessionWorkerVersion],
            _id: cacheKeys.sessionWorkerVersion
        })
    }

    return <></>
}

export default function SessionWorkersInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>



    if (convexCacheState[cacheKeys.sessionWorkerVersion] === browserCache[cacheKeys.sessionWorkerVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}