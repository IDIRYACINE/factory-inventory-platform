import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


const selectRecords = (state: RootState) => state.session.records
const selectDisplayedPage = (state: RootState) => state.session.displayedPage

export const selectActiveSessionRecordsPaginated = createSelector(
    [selectRecords, selectDisplayedPage], (records, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > records.length ? records.length : stopIndex

        return records.slice(displayedPage * 50, stopIndex)
    }
)

export const selectActiveSessionRecords = (state: RootState) => state.session.records



export const selectActiveSession = (state: RootState) => state.session.activeSession

export const selectLoadedSession = (state: RootState) => state.session.loadedSession