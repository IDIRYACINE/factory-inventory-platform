import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectDisplayedPage = (state: RootState) => state.affectations.displayedPage

const _selectAffectations = (state: RootState) => state.affectations.affectations


export const selectAffectations = createSelector(
    [_selectAffectations, selectDisplayedPage], (affectations, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > affectations.length ? affectations.length : stopIndex

        return affectations.slice(displayedPage * 50,stopIndex)
    }
)

export const selectLoadedAffectations = (state: RootState) => state.affectations.loaded


export const selectActiveAffectation = (state: RootState) => state.affectations.activeAffectation