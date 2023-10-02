'use client';

import { SettingsState } from "@/stores/settings/slice";
import Button from "antd/es/button";
import useTranslation from 'next-translate/useTranslation'


interface SidebarButtonProps {
    textKey: SettingsState['activePanel'];
    onClick: (panel: SettingsState['activePanel']) => void;
    selected: boolean;

}
const SidebarButton = ({ textKey, onClick, selected }: SidebarButtonProps) => {
    const { t } = useTranslation('common')


    const buttonType = selected ? 'default' : 'primary'

    return (
        <Button type={buttonType} onClick={() => onClick(textKey)} className="w-full">
            {t(textKey)}
        </Button>
    )

}

export default SidebarButton