
import { useUserNavigation } from "@/hooks/useNavigation";
import { Card, Typography } from "antd";


export default function UsersButton({ usersTitle }: { usersTitle: string }) {

    const { navigateHome } = useUserNavigation()

    const handleClick = () => {
        navigateHome()
    }

    return (
        <Card className="flex flex-row justify-center items-center" onClick={handleClick} hoverable >
            <Typography.Title level={5} >{usersTitle}</Typography.Title>
        </Card>
    )


}