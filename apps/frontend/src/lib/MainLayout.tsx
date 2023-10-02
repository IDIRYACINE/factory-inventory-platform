

import Sidebar from "@/components/navigation/Sidebar"
import MessageDelegate from "./MessageDelegate"
import AllStateLoader from "./StateLoaders/AllInjector"
import ReduxProvider from "./ReduxProvider"

const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <ReduxProvider>
            <div className="flex flex-row gap-4 w-screen h-screen">
                <Sidebar />
                <MessageDelegate />
                <AllStateLoader />
                {children}
            </div>
        </ReduxProvider>
    )
}


export default MainLayout