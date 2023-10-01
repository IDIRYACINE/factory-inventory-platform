"use client";

import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheWorkers, useCacheWorkers } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadWorkers } from "@/hooks/useWorkers";


const ReadFromCache = () => {

    useLoadCacheWorkers()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
    const workers = useLoadWorkers()

    const updateCache = useCacheWorkers()

    if(workers){
        updateCache({
            items: workers,
            version: convexCacheState[cacheKeys.workersVersion],
            _id : cacheKeys.sessionGroupVersion
        })
    }

    return <></>
}

export default function WorkersInjector({ convexCacheState, browserCacheState }: InjectorProps) {



if(convexCacheState[cacheKeys.workersVersion] === browserCacheState[cacheKeys.workersVersion]){
    return <ReadFromCache/>
}


return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}