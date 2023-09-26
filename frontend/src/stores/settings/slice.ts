import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
    panels : ['session', 'stock', 'inventory','productFamily','history','workers','settings']
    activePanel : 'session'| 'stock'| 'inventory'|'productFamily'|'history'|'workers'|'settings'
}

const initialState: SettingsState = {
    panels: ['session', 'stock', 'inventory','productFamily','history','workers','settings'],
    activePanel: 'session'

}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setActivePanel: (state, action: PayloadAction<SettingsState['activePanel']>) => {
            state.activePanel = action.payload
        }
    },
})

export const { setActivePanel } = settingsSlice.actions

export default settingsSlice.reducer