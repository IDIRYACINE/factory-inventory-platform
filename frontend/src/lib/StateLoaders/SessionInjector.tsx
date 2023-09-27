
"use client";

import { useLoadActiveSession, useLoadActiveSessionRecords } from "@/hooks/useSession"
import { useLoadSessionGroups } from "@/hooks/useSessionGroup";


export default function SessionInjector() {

    useLoadActiveSession()
    useLoadActiveSessionRecords()
    useLoadSessionGroups()

    return null
}