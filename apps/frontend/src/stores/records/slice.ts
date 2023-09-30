import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RecordsState {
    records : Doc<'sessionRecord'>[],
}

const initialState: RecordsState = {
    records: [],

}

export const recordsSlice = createSlice({
    name: 'sessionRecords',
    initialState,
    reducers: {
        setHistoryRecords: (state, action: PayloadAction<RecordsState['records']>) => {
            state.records = action.payload
        }
    },
})

export const { setHistoryRecords } = recordsSlice.actions

export default recordsSlice.reducer