
"use client";

import { useLoadActiveSession, useLoadActiveSessionRecords } from "@/hooks/useSession"


export default function SessionInjector() {

    useLoadActiveSession()
    useLoadActiveSessionRecords()

    return null
}