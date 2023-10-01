"use client";

import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheSessionWorkers, useCacheSessionWorkers } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadSessionWorkers } from "@/hooks/useSesionWorker";


const ReadFromCache = () => {

    useLoadCacheSessionWorkers()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
    const sessionWorkers = useLoadSessionWorkers()

    const updateCache = useCacheSessionWorkers()

    if(sessionWorkers){
        updateCache({
            items: sessionWorkers,
            version: convexCacheState.version,
            _id : cacheKeys.sessionGroupVersion
        })
    }

    return <></>
}

export default function SessionWorkersInjector({ convexCacheState, browserCacheState }: InjectorProps) {



if(convexCacheState.version === browserCacheState.version){
    return <ReadFromCache/>
}


return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}