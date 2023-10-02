"use client";

import AffectationInjector from "./AffectationInjector";
import FamilyCodesInjector from "./FamilyCodesInjector";
import InventoryInjector from "./InventoryInjector";
import SessionInjector from "./SessionInjector";
import StockInjector from "./StockInjector";
import WorkerInjector from "./WorkersInjector";
import { useLoadCacheMetadata } from "@/utility/caching/useCaching";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useEffect, useState } from "react";
import { InjectorComponent } from "./types";
import { CacheState, cacheKeys } from "@/utility/caching/db";


const InjectorDelegate = ({ convexCacheState }: { convexCacheState: CacheState }) => {
    const cacheMetadata = useLoadCacheMetadata()

    const injectors: InjectorComponent[] = [AffectationInjector, FamilyCodesInjector, InventoryInjector, SessionInjector, StockInjector, WorkerInjector]

    if (cacheMetadata === undefined || cacheMetadata[cacheKeys.affectationsVersion] === undefined) return <></>

    return (
        <>
            {injectors.map((Injector, index) => {
                return <Injector key={index} convexCacheState={convexCacheState} browserCacheState={cacheMetadata} />
            })}
        </>
    )
}


export default function AllStateInjectors() {

    const convexCacheState = useQuery(api.cache.readCache)




    if (!convexCacheState) return <></>

    console.log("convex", convexCacheState)

    return (
        <InjectorDelegate convexCacheState={convexCacheState} />
    )

}


