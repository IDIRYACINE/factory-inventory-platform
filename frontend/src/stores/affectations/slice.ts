import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AffectationState {
    affectations : Doc<'affectations'>[],
    itemsPerPage : number,
    pages : number,
    displayedPage: number,
    activeAffectation? : Doc<'affectations'> 
}

const initialState: AffectationState = {
    affectations: [],
    itemsPerPage: 50,
    pages: 0,
    displayedPage: 0,

}

export const affecatationSlice = createSlice({
    name: 'affecations',
    initialState,
    reducers: {
        setAffectations: (state, action: PayloadAction<AffectationState['affectations']>) => {
            state.affectations = action.payload
        },
        loadAffectations: (state, action: PayloadAction<AffectationState['affectations']>) => {
            state.affectations = [...state.affectations, ...action.payload]
        },
        selectAffecation: (state, action: PayloadAction<Doc<'affectations'>>) => {
            state.activeAffectation = action.payload
        },
        unselectAffecation: (state) => {
            state.activeAffectation = undefined
        }
    },
})

export const { setAffectations,selectAffecation,unselectAffecation,loadAffectations } = affecatationSlice.actions

export default affecatationSlice.reducer