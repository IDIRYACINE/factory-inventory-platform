import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductFamilyState {
    familyCodes : Doc<'familyCode'>[],
}

const initialState: ProductFamilyState = {
    familyCodes: [],
}

export const familySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFamilyCodes: (state, action: PayloadAction<ProductFamilyState['familyCodes']>) => {
            state.familyCodes = action.payload
        }
    },
})

export const { setFamilyCodes } = familySlice.actions

export default familySlice.reducer