"use client";

import AffectationInjector from "./AffectationInjector";
import FamilyCodesInjector from "./FamilyCodesInjector";
import InventoryInjector from "./InventoryInjector";
import SessionInjector from "./SessionInjector";
import StockInjector from "./StockInjectory";
import WorkerInjector from "./WorkersInjector";
import { useReadCacheMetadata } from "@/utility/caching/useCaching";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useEffect, useState } from "react";
import { InjectorComponent } from "./types";



export default function AllStateInjectors() {

    const readCacheState = useReadCacheMetadata()
    const convexCacheState = useQuery(api.cache.readCache)!

    const injectors: InjectorComponent[] = [AffectationInjector, FamilyCodesInjector, InventoryInjector, SessionInjector, StockInjector, WorkerInjector]

    const [cacheState, setCacheState] = useState<typeof convexCacheState>()


    useEffect(() => {
        readCacheState().then((cache) => {
            setCacheState(cache)
        })
    }, [readCacheState])


    if (!cacheState) return <></>

    return (
        <>
            {injectors.map((Injector, index) => {
                return <Injector key={index} convexCacheState={convexCacheState} browserCacheState={cacheState} />
            })}
        </>
    )

}


