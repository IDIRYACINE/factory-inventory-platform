import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const selectPanels = (state: RootState) => state.settings.panels


export const selectActivePanel = (state: RootState) => state.settings.activePanel


export const selectPanelsState = createSelector(
    [selectPanels, selectActivePanel],(panels, activePanel) => ({ panels, activePanel })
)