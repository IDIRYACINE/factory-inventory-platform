

import { SettingsState } from "@/stores/settings/slice";
import { Button } from "antd"; import { useTranslations } from 'next-intl'


interface SidebarButtonProps {
    textKey: SettingsState['activePanel'];
    onClick: (panel: SettingsState['activePanel']) => void;
    selected: boolean;

}
const SidebarButton = ({ textKey, onClick, selected }: SidebarButtonProps) => {
    const t = useTranslations()


    const buttonType = selected ? 'default' : 'primary'

    return (
        <Button type={buttonType} onClick={() => onClick(textKey)} className="w-full">
            {t(textKey)}
        </Button>
    )

}

export default SidebarButton