
import { useCloseSession, useOpenSession, useReadActiveSession } from "@/hooks/useSession";
import { Card, Typography } from "antd";


export default function OpenSessionButton({ openSessionTitle, closeSessionTitle }: { closeSessionTitle: string, openSessionTitle: string }) {

    const session = useReadActiveSession()

    const openSession = useOpenSession()
    const closeSession = useCloseSession()

    const handleClick = () => {
        if (session) {
            closeSession()
            return
        }

        openSession()

    }

    const title = session ? closeSessionTitle : openSessionTitle

    return (
        <Card className="flex flex-row justify-center items-center" onClick={handleClick} hoverable >
            <Typography.Title level={5} >{title}</Typography.Title>
        </Card>
    )


}