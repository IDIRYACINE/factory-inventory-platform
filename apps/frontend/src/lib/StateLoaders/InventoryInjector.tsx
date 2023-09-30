"use client";

import { useLoadInventory } from "@/hooks/useInventory"


export default function InventoryInjector() {

    useLoadInventory()
    
    return <></>
}