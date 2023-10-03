
import NoSessionPanel from "@/components/session/NoSessionPanel";
import { SessionPanel } from "@/components/session/SessionPanel";
import { useReadActiveSession } from "@/hooks/useSession";
import { GetServerSideProps } from "next";

export default function SessionPage() {

    const session = useReadActiveSession()

    const Page = session ? SessionPanel : NoSessionPanel


    return (
        <>


            <Page />
        </>
    )
}
import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale