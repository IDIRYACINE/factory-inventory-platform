
import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheProductFamily, useLoadCacheProductFamily, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { useLoadFamilyCodes } from "@/hooks/useFamilyCodes";



const ReadFromCache = () => {

    useLoadCacheProductFamily()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const familyCodes = useLoadFamilyCodes()

    const updateCache = useCacheProductFamily()

    if (familyCodes) {
        updateCache({
            items: familyCodes,
            version: convexCacheState[cacheKeys.productFamilyVersion],
            _id: cacheKeys.productFamilyVersion
        })
    }

    return <></>
}

export default function FamilyCodeInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>


    if (convexCacheState[cacheKeys.productFamilyVersion] === browserCache[cacheKeys.productFamilyVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}