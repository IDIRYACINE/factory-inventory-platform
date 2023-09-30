'use client'

import Sidebar from "@/components/navigation/Sidebar"
import { store } from "@/stores/store"
import { Provider } from "react-redux"
import MessageDelegate from "./MessageDelegate"
import AllStateLoader from "./StateLoaders/AllInjector"

const MainLayout = ({ children }: React.PropsWithChildren) => {

    return (
        <Provider store={store}>
            <div className="flex flex-row gap-4 h-full w-full">
                <Sidebar />
                <MessageDelegate/>
                {/* <AllStateLoader/> */}
                {children}
            </div>
        </Provider>
    )
}


export default MainLayout