import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductFamilyState {
    familyCodes : Doc<'familyCode'>[],
    itemsPerPage : number,
    pages : number,
    displayedPage: number,
    familyCode?: Doc<'familyCode'>
}

const initialState: ProductFamilyState = {
    familyCodes: [],
    itemsPerPage : 50,
    pages : 0,
    displayedPage: 0,
    familyCode: undefined
}

export const familySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFamilyCodes: (state, action: PayloadAction<ProductFamilyState['familyCodes']>) => {
            state.familyCodes = action.payload
        },

        loadFamilyCodes: (state, action: PayloadAction<ProductFamilyState['familyCodes']>) => {
            state.familyCodes = [...state.familyCodes , ...action.payload] 
        },
        unselectFamilyCode:(state,)=>{
            state.familyCode = undefined
        }

    },
})

export const { setFamilyCodes,loadFamilyCodes,unselectFamilyCode } = familySlice.actions

export default familySlice.reducer