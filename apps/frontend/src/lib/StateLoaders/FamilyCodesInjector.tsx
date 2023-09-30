"use client";

import { useLoadFamilyCodes } from "@/hooks/useFamilyCodes"


export default function FamilyCodesInjector() {

    useLoadFamilyCodes()
    
    return null
}