import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StockState {
    stock : Doc<'stock'>[],
}

const initialState: StockState = {
    stock: [],

}

export const inventorySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setStock: (state, action: PayloadAction<StockState['stock']>) => {
            state.stock = action.payload
        }
    },
})

export const { setStock } = inventorySlice.actions

export default inventorySlice.reducer