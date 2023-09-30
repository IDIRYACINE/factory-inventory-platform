import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TPanels = ['session', 'stock', 'inventory','productFamily','workers','affectations','settings']
type APanel ='session'| 'stock'| 'inventory'|'productFamily'|'affectations'|'workers'|'settings'

export interface SettingsState {
    panels :TPanels
    activePanel : APanel,
    importingInventory : boolean,
    importingStock : boolean,
    importingFamilyCode : boolean,
    importingAffectations : boolean,
    message?: string,
    messageType?: 'success' | 'error' | 'warning' | 'info'
}

const initialState: SettingsState = {
    panels: ['session', 'stock', 'inventory', 'productFamily',  'workers', 'affectations','settings'],
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
        displayMessage: (state, action: PayloadAction<{ message: string, type: SettingsState['messageType'] }>) => {
            state.message = action.payload.message
            state.messageType = action.payload.type
        },
        clearMessage: (state) => {
            state.message = undefined
            state.messageType = undefined
        },
       
    },
})

export const { setActivePanel,displayMessage,clearMessage } = settingsSlice.actions
export const { setImportingInventory,setImportingAffectations,setImportingFamilyCode,setImportingStock } = settingsSlice.actions

export default settingsSlice.reducer