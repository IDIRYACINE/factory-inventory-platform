import { useSettingsNavigation } from "@/hooks/useNavigation";
import { Card, Typography } from "antd";


export default function ImportsButton({ importsTitle }: { importsTitle: string }) {

    const { navigateImports } = useSettingsNavigation()


    return (
        <Card className="flex flex-row justify-center items-center" onClick={navigateImports} hoverable >
            <Typography.Title level={5} >{importsTitle}</Typography.Title>
        </Card>
    )
}