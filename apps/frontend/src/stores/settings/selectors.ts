import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const selectPanels = (state: RootState) => state.settings.panels


export const selectActivePanel = (state: RootState) => state.settings.activePanel


export const selectPanelsState = createSelector(
    [selectPanels, selectActivePanel], (panels, activePanel) => ({ panels, activePanel })
)


const selectSettingsSlice = (state: RootState) => state.settings

export const selectImpportingStatus = createSelector([selectSettingsSlice], (settings) => {

    const importingInventory = settings.importingInventory
    const importingStock = settings.importingStock
    const importingAffectations = settings.importingAffectations
    const importingFamilyCode = settings.importingFamilyCode

    return {
        importingInventory,
        importingStock,
        importingAffectations,
        importingFamilyCode
    }
})