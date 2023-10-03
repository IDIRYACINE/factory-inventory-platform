
import { useClearAllCache } from "@/utility/caching/useCaching";
import { useClerk } from "@clerk/nextjs";
import { Card, Typography } from "antd";


export default function LogoutButton({ logoutTitle }: { logoutTitle: string }) {

    const { signOut } = useClerk();
    const clearCache = useClearAllCache()

    const handleSignOut = () => {
        clearCache().then(() => signOut())
    }


    return (
        <Card className="flex flex-row justify-center items-center" onClick={handleSignOut} hoverable >
            <Typography.Title level={5} >{logoutTitle}</Typography.Title>
        </Card>
    )


}