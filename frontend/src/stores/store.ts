import { configureStore } from '@reduxjs/toolkit'

import settingsSliceReducer from './settings/slice'

export const store = configureStore({
    reducer: {
        settings: settingsSliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch