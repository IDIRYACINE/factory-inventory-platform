import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";



const selectFamillies = (state: RootState) => state.familyCodes.familyCodes

const selectDisplayedPage = (state: RootState) => state.familyCodes.displayedPage

export const selectFamilyCodes = createSelector(
    [selectFamillies, selectDisplayedPage], (familyCodes, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > familyCodes.length ? familyCodes.length : stopIndex

        return familyCodes.slice(displayedPage * 50,stopIndex)
    }
)


export const selectFamilyCode = (state: RootState) => state.familyCodes.familyCode

export const selectLoadedFamilyCodes = (state: RootState) => state.familyCodes.loaded