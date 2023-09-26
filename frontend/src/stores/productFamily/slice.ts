import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InventoryState {
    familyCodes : Doc<'familyCode'>[],
}

const initialState: InventoryState = {
    familyCodes: [],
}

export const familySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFamilyCodes: (state, action: PayloadAction<InventoryState['familyCodes']>) => {
            state.familyCodes = action.payload
        }
    },
})

export const { setFamilyCodes } = familySlice.actions

export default familySlice.reducer