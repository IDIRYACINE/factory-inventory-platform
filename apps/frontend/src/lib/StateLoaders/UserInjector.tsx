
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheUsers, useCacheUsers, useReadCacheMetadata, useReadConvexCache } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadUsers } from "@/hooks/useUser";


const ReadFromCache = () => {

    useLoadCacheUsers()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const user = useLoadUsers()

    const updateCache = useCacheUsers()

    if (user) {
        updateCache({
            items: user,
            version: convexCacheState[cacheKeys.usersVersion],
            _id: cacheKeys.usersVersion
        })
    }

    return <></>
}

export default function UserInjector() {
    const browserCache = useReadCacheMetadata()
    const convexCacheState = useReadConvexCache()

    if (browserCache === undefined || convexCacheState === undefined) return <></>



    if (convexCacheState[cacheKeys.usersVersion] === browserCache[cacheKeys.usersVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}