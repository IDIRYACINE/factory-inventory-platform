import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WorkersState {
    workers : Doc<'workers'>[],
    worker? : Doc<'workers'>,
    sessionWorkers : Doc<'sessionWorkers'>[],
    sessionWorker? : Doc<'sessionWorkers'>,
    loadedWorkers : boolean,
    loadedSessionWorkers : boolean,
}

const initialState: WorkersState = {
    workers: [],
    sessionWorkers : [],
    loadedWorkers : false,
    loadedSessionWorkers : false,
}

export const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        setWorkers: (state, action: PayloadAction<WorkersState['workers']>) => {
            state.workers = action.payload
            state.loadedWorkers = true
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
        setLoadedWorkers: (state, action: PayloadAction<boolean>) => {
            state.loadedWorkers = action.payload
        },
        setLoadedSessionWorkers: (state, action: PayloadAction<boolean>) => {
            state.loadedSessionWorkers = action.payload
        },
    },
})

export const { setWorkers,selectWorker,unselectWorker } = workersSlice.actions
export const { setSessionWorkers,selectSessionWorker,unselectSessionWorker } = workersSlice.actions
export const { setLoadedWorkers,setLoadedSessionWorkers } = workersSlice.actions

export default workersSlice.reducer