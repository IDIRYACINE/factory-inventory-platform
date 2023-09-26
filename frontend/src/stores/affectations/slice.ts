import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AffectationState {
    affecations : Doc<'affectations'>[],
}

const initialState: AffectationState = {
    affecations: [],

}

export const affecatationSlice = createSlice({
    name: 'affecations',
    initialState,
    reducers: {
        setAffectations: (state, action: PayloadAction<AffectationState['affecations']>) => {
            state.affecations = action.payload
        }
    },
})

export const { setAffectations } = affecatationSlice.actions

export default affecatationSlice.reducer