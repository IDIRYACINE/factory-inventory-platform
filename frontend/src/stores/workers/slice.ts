import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WorkersState {
    workers : Doc<'workers'>[],
    worker? : Doc<'workers'>,
}

const initialState: WorkersState = {
    workers: [],

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
        }
    },
})

export const { setWorkers,selectWorker,unselectWorker } = workersSlice.actions

export default workersSlice.reducer