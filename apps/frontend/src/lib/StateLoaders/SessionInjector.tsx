
"use client";

import { useLoadSessionWorkers } from "@/hooks/useSesionWorker";
import { useLoadActiveSession, useLoadActiveSessionRecords } from "@/hooks/useSession"
import { useLoadSessionGroups } from "@/hooks/useSessionGroup";


export default function SessionInjector() {

    useLoadActiveSession()
    useLoadActiveSessionRecords()
    useLoadSessionGroups()
    useLoadSessionWorkers()

    return null
}