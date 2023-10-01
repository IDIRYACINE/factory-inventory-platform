"use client";

import { useLoadSessionGroups } from "@/hooks/useSessionGroup";
import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheSessionGroups, useCacheSessionGroups } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";


const ReadFromCache = () => {

    useLoadCacheSessionGroups()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
    const sessionGroups = useLoadSessionGroups()

    const updateCache = useCacheSessionGroups()

    if(sessionGroups){
        updateCache({
            items: sessionGroups,
            version: convexCacheState.version,
            _id : cacheKeys.sessionGroupVersion
        })
    }

    return <></>
}

export default function SessionGroupsInjector({ convexCacheState, browserCacheState }: InjectorProps) {



if(convexCacheState.version === browserCacheState.version){
    return <ReadFromCache/>
}


return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}