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
    name: 'productFamily',
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
        },
        selectFamilyCode:(state,action:PayloadAction<ProductFamilyState['familyCode']>)=>{
            state.familyCode = action.payload
        }

    },
})

export const { setFamilyCodes,loadFamilyCodes,unselectFamilyCode,selectFamilyCode } = familySlice.actions

export default familySlice.reducer