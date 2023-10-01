"use client";

import { useLoadAffectations } from "@/hooks/useAffectation";
import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheAffectations, useLoadCacheAffectations } from "@/utility/caching/useCaching";



const ReadFromCache = () => {

    useLoadCacheAffectations()

    return <></>
}

const FetchAndUpdateCache = ({convexCacheState}:UpdateInjectorProps) => {
    
        const affectations = useLoadAffectations()

        const updateCache = useCacheAffectations()

        if(affectations){
            updateCache({
                items: affectations,
                version: convexCacheState.version,
                _id : cacheKeys.affectationsVersion
            })
        }
    
        return <></>
}

export default function AffectationInjector({ convexCacheState, browserCacheState }: InjectorProps) {



    if(convexCacheState.version === browserCacheState.version){
        return <ReadFromCache/>
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState}/>
}