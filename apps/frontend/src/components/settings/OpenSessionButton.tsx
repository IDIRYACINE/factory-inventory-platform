"use client";

import { useCloseSession, useOpenSession, useReadActiveSession } from "@/hooks/useSession";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Typography from "antd/es/typography";


export default function OpenSessionButton({ openSessionTitle,closeSessionTitle }: { closeSessionTitle:string,openSessionTitle: string }) {

    const session = useReadActiveSession()

    const openSession = useOpenSession()
    const closeSession = useCloseSession()

    const handleClick = () => {
        if(session){
            closeSession()
            return
        }

        openSession()

    }

    const title = session ? closeSessionTitle : openSessionTitle

    return (
        <Card hoverable >
            <Button onClick={handleClick} className="w-full h-full">
                <Typography.Title level={5} >{title}</Typography.Title>
            </Button>
        </Card>
    )


}