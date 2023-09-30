'use client'

import { store } from "@/stores/store"
import { Provider } from "react-redux"

const ReduxProvider = ({ children }: React.PropsWithChildren) => {

    return (
        <Provider store={store}>
                {children}
        </Provider>
    )
}


export default ReduxProvider