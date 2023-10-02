
import { useUserNavigation } from "@/hooks/useNavigation";
import { useCloseSession, useOpenSession, useReadActiveSession } from "@/hooks/useSession";
import { Button, Card, Typography } from "antd";


export default function UsersButton({ usersTitle }: { usersTitle: string }) {

    const { navigateHome } = useUserNavigation()

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