
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheUsers, useCacheUsers } from "@/utility/caching/useCaching";
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

export default function UserInjector({ convexCacheState, browserCacheState }: InjectorProps) {



    if (convexCacheState[cacheKeys.usersVersion] === browserCacheState[cacheKeys.usersVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}