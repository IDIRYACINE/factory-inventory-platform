"use client";

import { useReadLoadingState } from "@/hooks/useSettings";
import AffectationInjector from "./AffectationInjector";
import FamilyCodesInjector from "./FamilyCodesInjector";
import InventoryInjector from "./InventoryInjector";
import SessionInjector from "./SessionInjector";
import StockInjector from "./StockInjectory";
import WorkerInjector from "./WorkersInjector";

type As = () => JSX.Element

export default function AllStateLoader() {

    const loadState = useReadLoadingState()

    const injectors: As[] = []

    if(!loadState.loadedAffectations){
        injectors.push(AffectationInjector)
    }

    if(!loadState.loadedFamilies){
        injectors.push(FamilyCodesInjector)
    }

    if(!loadState.loadedInventory){
        injectors.push(InventoryInjector)
    }


    if(!loadState.loadedSession){
        injectors.push(SessionInjector)
    }

    if(!loadState.loadedStock){
        injectors.push(StockInjector)
    }

    if(!loadState.loadedWorkers){
        injectors.push(WorkerInjector)
    }

    return (
        <>
            {injectors.map((Injector, index) => {
                return <Injector key={index} />
            })}
        </>
    )

}


