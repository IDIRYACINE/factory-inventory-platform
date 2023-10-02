
import NoSessionPanel from "@/components/session/NoSessionPanel";
import { SessionPanel } from "@/components/session/SessionPanel";
import { useReadActiveSession } from "@/hooks/useSession";
import { GetServerSideProps } from "next";
import AllStateLoader from "@/lib/StateLoaders/AllInjector"

export default function SessionPage() {

    const session = useReadActiveSession()

    const Page = session ? SessionPanel : NoSessionPanel


    return (
        <>
            <AllStateLoader />

            <Page />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    return { props: {} }
}