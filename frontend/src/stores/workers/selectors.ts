import { RootState } from "../store";


export const selectWorkers = (state: RootState) => state.workers.workers


export const selectWorker = (state: RootState) => state.workers.worker


export const selectSessionWorkers = (state: RootState) => state.workers.sessionWorkers

export const selectActiveSessionWorker = (state: RootState) => state.workers.sessionWorker