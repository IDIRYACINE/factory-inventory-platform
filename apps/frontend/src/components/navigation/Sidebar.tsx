"use client";
import { usePanelNavigation } from "@/hooks/useNavigation";
import SidebarButton from "@/components/navigation/SidebarButton";

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