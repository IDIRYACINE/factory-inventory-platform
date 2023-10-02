
import { useLoadAffectations } from "@/hooks/useAffectation";
import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheAffectations, useLoadCacheAffectations, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";



const ReadFromCache = () => {

    useLoadCacheAffectations()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const affectations = useLoadAffectations()

    const updateCache = useCacheAffectations()

    if (affectations !== undefined) {
        updateCache({
            items: affectations,
            version: convexCacheState.affectationsVersion,
            _id: cacheKeys.affectationsVersion
        })
    }

    return <></>
}

export default function AffectationInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>

    if (convexCacheState[cacheKeys.affectationsVersion] === browserCache[cacheKeys.affectationsVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}