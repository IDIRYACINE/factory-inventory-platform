import { useSettingsNavigation } from "@/hooks/useNavigation";
import { Button, Card, Typography } from "antd";


export default function ImportsButton({ importsTitle }: { importsTitle: string }) {

    const { navigateImports } = useSettingsNavigation()


    return (
        <Card hoverable >
            <Button onClick={navigateImports} className="w-full h-full">
                <Typography.Title level={5} >{importsTitle}</Typography.Title>
            </Button>
        </Card>
    )
}