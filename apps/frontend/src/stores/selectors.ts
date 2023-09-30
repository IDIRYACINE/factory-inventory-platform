import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";


const selectLoadedInventory = (state:RootState) => state.inventory.loaded;
const selectLoadedStock = (state:RootState) => state.stock.loaded;
const selectLoadedFamilies = (state:RootState) => state.familyCodes.loaded;
const selectLoadedAffectations = (state:RootState) => state.affectations.loaded;

const selectLoadedWorkers = (state:RootState) => state.workers.loadedWorkers;
const selectLoadedSessionWorkers = (state:RootState) => state.workers.loadedSessionWorkers;
const selectLoadedSession = (state:RootState) => state.session.loadedSession;
const selectLoadedSessionGroups = (state:RootState) => state.sessionGroups.loaded;


export const selectLoadingState = createSelector(
    [selectLoadedInventory, selectLoadedStock, selectLoadedFamilies, selectLoadedAffectations, selectLoadedWorkers, selectLoadedSessionWorkers, selectLoadedSession, selectLoadedSessionGroups], (loadedInventory, loadedStock, loadedFamilies, loadedAffectations, loadedWorkers, loadedSessionWorkers, loadedSession, loadedSessionGroups) => {
        return {
            loadedInventory,
            loadedStock,
            loadedFamilies,
            loadedAffectations,
            loadedWorkers,
            loadedSessionWorkers,
            loadedSession,
            loadedSessionGroups
        }
    }
)
