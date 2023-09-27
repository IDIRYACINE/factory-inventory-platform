import { RootState } from "../store";


export const selectWorkers = (state: RootState) => state.workers.workers


export const selectWorker = (state: RootState) => state.workers.worker