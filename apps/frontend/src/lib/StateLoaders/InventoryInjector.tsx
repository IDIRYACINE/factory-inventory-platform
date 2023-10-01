"use client";

import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheInventory, useLoadCacheInventory } from "@/utility/caching/useCaching";
import { useLoadInventory } from "@/hooks/useInventory";



const ReadFromCache = () => {

    useLoadCacheInventory()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
        const inventory = useLoadInventory()

        const updateCache = useCacheInventory()

        if(inventory){
            updateCache({
                items: inventory,
                version: convexCacheState.version,
                _id : cacheKeys.inventoryVersion
            })
        }
    
        return <></>
}

export default function InventoryInjector({ convexCacheState, browserCacheState }: InjectorProps) {



    if(convexCacheState.version === browserCacheState.version){
        return <ReadFromCache/>
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}