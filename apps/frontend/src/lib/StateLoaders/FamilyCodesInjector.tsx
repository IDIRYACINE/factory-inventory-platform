"use client";

import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheProductFamily, useLoadCacheProductFamily } from "@/utility/caching/useCaching";
import { useLoadFamilyCodes } from "@/hooks/useFamilyCodes";



const ReadFromCache = () => {

    useLoadCacheProductFamily()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
        const familyCodes = useLoadFamilyCodes()

        const updateCache = useCacheProductFamily()

        if(familyCodes){
            updateCache({
                items: familyCodes,
                version: convexCacheState[cacheKeys.productFamilyVersion],
                _id : cacheKeys.productFamilyVersion
            })
        }
    
        return <></>
}

export default function FamilyCodeInjector({ convexCacheState, browserCacheState }: InjectorProps) {



    if(convexCacheState[cacheKeys.productFamilyVersion] === browserCacheState[cacheKeys.productFamilyVersion]){
        return <ReadFromCache/>
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}