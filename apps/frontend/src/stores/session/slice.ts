import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SessionState {
    records : Doc<'sessionRecord'>[],
    activeSession? : Doc<'sessions'> ,
    itemsPerPage : number,
    pages : number,
    displayedPage: number,
    loadedSession: boolean,

}

const initialState: SessionState = {
    records: [],
    activeSession: undefined,
    itemsPerPage: 50,
    pages: 0,
    displayedPage: 0,
    loadedSession: false
}

export const sessionSlice = createSlice({
    name: 'sessionRecords',
    initialState,
    reducers: {
        setRecords: (state, action: PayloadAction<SessionState['records']>) => {
            state.records = action.payload
        },
        loadRecords : (state, action: PayloadAction<SessionState['records']>) => {
            state.records = [...state.records , ...action.payload] 
        }
        ,
        setActiveSession: (state, action: PayloadAction<SessionState['activeSession']>) => {
            state.activeSession = action.payload
        },
        setLoadedSession: (state, action: PayloadAction<boolean>) => {
            state.loadedSession = action.payload
        }
    },
})

export const { setRecords,setActiveSession,loadRecords,setLoadedSession } = sessionSlice.actions

export default sessionSlice.reducer