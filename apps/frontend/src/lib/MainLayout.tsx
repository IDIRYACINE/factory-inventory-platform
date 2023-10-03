
import AllStateLoader from "@/lib/StateLoaders/AllInjector"

import Sidebar from "@/components/navigation/Sidebar"
import MessageDelegate from "./MessageDelegate"
import { AntdThemeProvider } from "./AntdThemeConfig"
import ServerProviders from "./ServerProviders"
import { Provider } from "react-redux"
import { store } from "@/stores/store"

const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            <ServerProviders>
                <AntdThemeProvider>
                    <div className="flex flex-row gap-4 w-screen h-screen">
                        <Sidebar />
                        <MessageDelegate />
                        <AllStateLoader />
                        {children}
                    </div>
                </AntdThemeProvider>
            </ServerProviders>
        </Provider>
    )
}


export default MainLayout