import { RootState } from "../store";


export const selectWorkers = (state: RootState) => state.workers.workers


export const selectWorker = (state: RootState) => state.workers.worker


export const selectSessionWorkers = (state: RootState) => state.workers.sessionWorkers

export const selectActiveSessionWorker = (state: RootState) => state.workers.sessionWorker

export const selectLoadedWorkers = (state: RootState) => state.workers.loadedWorkers

export const selectLoadedSessionWorkers = (state: RootState) => state.workers.loadedSessionWorkers