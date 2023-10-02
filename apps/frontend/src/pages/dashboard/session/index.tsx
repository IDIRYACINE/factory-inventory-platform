
import NoSessionPanel from "@/components/session/NoSessionPanel";
import { SessionPanel } from "@/components/session/SessionPanel";
import { useReadActiveSession } from "@/hooks/useSession";

export default function SessionPage() {

    const session = useReadActiveSession()

    const Page = session ? SessionPanel : NoSessionPanel


    return (
        <>
            <Page />
        </>
    )
}