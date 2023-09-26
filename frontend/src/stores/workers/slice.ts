import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WorkersState {
    workers : Doc<'workers'>[],
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
        }
    },
})

export const { setWorkers } = workersSlice.actions

export default workersSlice.reducer