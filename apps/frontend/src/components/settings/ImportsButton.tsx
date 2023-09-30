import { useSettingsNavigation } from "@/hooks/useNavigation";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Typography from "antd/es/typography";


export default function ImportsButton({importsTitle}:{importsTitle:string}){

    const {navigateImports} = useSettingsNavigation()


    return (
       <Card hoverable >
            <Button onClick={navigateImports} className="w-full h-full">
                <Typography.Title level={5} >{importsTitle}</Typography.Title>
            </Button>
        </Card>
    )
}