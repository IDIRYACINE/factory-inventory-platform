import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
    panels : ['session', 'stock', 'inventory','productFamily','history','workers','settings']
    activePanel : 'session'| 'stock'| 'inventory'|'productFamily'|'history'|'workers'|'settings',
    importingInventory : boolean,
    importingStock : boolean,
    importingFamilyCode : boolean,
    importingAffectations : boolean,
}

const initialState: SettingsState = {
    panels: ['session', 'stock', 'inventory', 'productFamily', 'history', 'workers', 'settings'],
    activePanel: 'session',
    importingInventory: false,
    importingStock: false,
    importingFamilyCode: false,
    importingAffectations: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setActivePanel: (state, action: PayloadAction<SettingsState['activePanel']>) => {
            state.activePanel = action.payload
        },
        setImportingInventory: (state,action : PayloadAction<SettingsState['importingInventory']>) => {
            state.importingInventory = action.payload
        },
        setImportingStock: (state,action : PayloadAction<SettingsState['importingStock']>) => {
            state.importingStock = action.payload
        },
        setImportingFamilyCode: (state,action : PayloadAction<SettingsState['importingFamilyCode']>) => {
            state.importingFamilyCode = action.payload
        },
        setImportingAffectations: (state,action : PayloadAction<SettingsState['importingAffectations']>) => {
            state.importingAffectations = action.payload
        },
       
    },
})

export const { setActivePanel } = settingsSlice.actions
export const { setImportingInventory,setImportingAffectations,setImportingFamilyCode,setImportingStock } = settingsSlice.actions

export default settingsSlice.reducer