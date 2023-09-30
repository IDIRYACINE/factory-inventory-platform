import { usePanelNavigation } from "@/hooks/useNavigation";
import { SettingsState } from "@/stores/settings/slice";
import Button from "antd/es/button";
import theme from "antd/es/theme";
import useTranslation from 'next-translate/useTranslation'

const { useToken } = theme;

interface SidebarButtonProps {
    textKey: SettingsState['activePanel'];
    onClick: (panel: SettingsState['activePanel']) => void;
    selected: boolean;

}
const SidebarButton = ({ textKey, onClick, selected }: SidebarButtonProps) => {
    const { t } = useTranslation('common')

    const text = t(textKey)

    const buttonType = selected ? 'default' : 'primary'

    return (
        <Button type={buttonType} onClick={() => onClick(textKey)} className="w-full">
            {text}
        </Button>
    )

}

const Sidebar = () => {
    const { panels, navigateToPanel, activePanel } = usePanelNavigation()


    return (
        <div className="bg-primary flex h-full px-4  flex-col justify-center items-start gap-4">
            {
                panels.map((panel) => {
                    const sidebarButtonProps = {
                        textKey: panel,
                        onClick: navigateToPanel,
                        selected: panel === activePanel
                    }

                    return (
                        <SidebarButton key={panel} {...sidebarButtonProps} />
                    )
                })
            }
        </div>
    )
}

export default Sidebar