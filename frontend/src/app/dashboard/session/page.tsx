"use client";

import NoSessionPanel from "@/components/session/NoSessionPanel";
import { SessionPanel } from "@/components/session/SessionPanel";
import { useReadActiveSession } from "@/hooks/useSession";
import SessionInjector from "@/lib/StateLoaders/SessionInjector";
import StateLoader from "@/lib/StateLoaders/StateLoader";

export default function SessionPage() {

    const session = useReadActiveSession()

    const Page = session ? SessionPanel : NoSessionPanel


    return (
        <>
            <StateLoader injector={<SessionInjector />} />
            <Page />
        </>
    )
}