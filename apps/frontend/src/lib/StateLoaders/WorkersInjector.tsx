"use client";

import { useLoadWorkers } from "@/hooks/useWorkers"


export default function WorkerInjector() {

    useLoadWorkers()

    return null
}