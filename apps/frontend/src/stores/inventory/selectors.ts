import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const selectInventory = (state: RootState) => state.inventory.inventory

export const selectInventoriesStore = (state: RootState) => state.inventory.inventories

const selectDisplayedPage = (state: RootState) => state.inventory.displayedPage

export const selectInventoriesPaginated = createSelector(
    [selectInventoriesStore, selectDisplayedPage], (inventories, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > inventories.length ? inventories.length : stopIndex

        return inventories.slice(displayedPage * 50, stopIndex)
    }
)


export const selectLoadedInventories = (state: RootState) => state.inventory.loaded