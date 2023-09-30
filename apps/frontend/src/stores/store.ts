import { configureStore } from '@reduxjs/toolkit'

import settingsSliceReducer from './settings/slice'
import workersSliceReducer from './workers/slice'
import sessionGroupsSliceReducer from './groups/slice'
import inventorySliceReducer from './inventory/slice'
import stocksSliceReducer from './stock/slice'
import recordsSliceReducer from './records/slice'
import affectionsSliceReducer from './affectations/slice'
import familyCodeSliceReducer from './productFamily/slice'
import sessionSliceReducer from './session/slice'
import usersSliceReducer from './users/slice'


export const store = configureStore({
    reducer: {
        settings: settingsSliceReducer,
        workers : workersSliceReducer,
        sessionGroups : sessionGroupsSliceReducer,
        inventory : inventorySliceReducer,
        stock: stocksSliceReducer,
        records:recordsSliceReducer,
        affectations : affectionsSliceReducer,
        familyCodes : familyCodeSliceReducer,
        session : sessionSliceReducer,
        users : usersSliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch