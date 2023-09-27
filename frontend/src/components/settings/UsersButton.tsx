"use client";

import { useUserNavigation } from "@/hooks/useNavigation";
import { useCloseSession, useOpenSession, useReadActiveSession } from "@/hooks/useSession";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Typography from "antd/es/typography";


export default function UsersButton({ usersTitle }: { usersTitle:string }) {

    const {navigateHome} = useUserNavigation()

    const handleClick = () => {
        navigateHome()
    }

    return (
        <Card hoverable >
            <Button onClick={handleClick} className="w-full h-full">
                <Typography.Title level={5} >{usersTitle}</Typography.Title>
            </Button>
        </Card>
    )


}