import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WorkersState {
    workers : Doc<'workers'>[],
    worker? : Doc<'workers'>,
    sessionWorkers : Doc<'sessionWorkers'>[],
    sessionWorker? : Doc<'sessionWorkers'>,
}

const initialState: WorkersState = {
    workers: [],
    sessionWorkers : [],

}

export const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        setWorkers: (state, action: PayloadAction<WorkersState['workers']>) => {
            state.workers = action.payload
        },
        selectWorker: (state, action: PayloadAction<WorkersState['worker']>) => {
            state.worker = action.payload
        },
        unselectWorker: (state) => {
            state.worker = undefined
        },
        setSessionWorkers: (state, action: PayloadAction<WorkersState['sessionWorkers']>) => {
            state.sessionWorkers = action.payload
        },
        selectSessionWorker: (state, action: PayloadAction<WorkersState['sessionWorker']>) => {
            state.sessionWorker = action.payload
        },
        unselectSessionWorker: (state) => {
            state.sessionWorker = undefined
        },
    },
})

export const { setWorkers,selectWorker,unselectWorker } = workersSlice.actions
export const { setSessionWorkers,selectSessionWorker,unselectSessionWorker } = workersSlice.actions

export default workersSlice.reducer