"use client";

import { useLoadAffectations } from "@/hooks/useAffectation";
import { cacheKeys } from "@/utility/caching/db";
import { InjectorProps, UpdateInjectorProps } from "./types";
import { useCacheAffectations, useLoadCacheAffectations } from "@/utility/caching/useCaching";



const ReadFromCache = () => {

    useLoadCacheAffectations()

    return <></>
}

const FetchAndUpdateCache = ({ convexCacheState }: UpdateInjectorProps) => {

    const affectations = useLoadAffectations()

    const updateCache = useCacheAffectations()

    if (affectations !== undefined) {
        updateCache({
            items: affectations,
            version: convexCacheState.affectationsVersion,
            _id: cacheKeys.affectationsVersion
        })
    }

    return <></>
}

export default function AffectationInjector({ convexCacheState, browserCacheState }: InjectorProps) {


    if (convexCacheState[cacheKeys.affectationsVersion] === browserCacheState[cacheKeys.affectationsVersion]) {
        return <ReadFromCache />
    }


    return <FetchAndUpdateCache convexCacheState={convexCacheState} />
}