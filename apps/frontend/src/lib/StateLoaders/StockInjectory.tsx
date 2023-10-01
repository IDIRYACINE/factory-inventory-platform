"use client";

import { cacheKeys } from "@/utility/caching/db";
import { useLoadCacheStock, useCacheStock } from "@/utility/caching/useCaching";
import { UpdateInjectorProps, InjectorProps } from "./types";
import { useLoadStock } from "@/hooks/useStock";


const ReadFromCache = () => {

    useLoadCacheStock()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
    const stock = useLoadStock()

    const updateCache = useCacheStock()

    if(stock){
        updateCache({
            items: stock,
            version: convexCacheState.version,
            _id : cacheKeys.sessionGroupVersion
        })
    }

    return <></>
}

export default function StockInjector({ convexCacheState, browserCacheState }: InjectorProps) {



if(convexCacheState.version === browserCacheState.version){
    return <ReadFromCache/>
}


return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}