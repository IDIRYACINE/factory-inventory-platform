import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StockState {
    stocks : Doc<'stock'>[],
    itemsPerPage : number,
    pages : number,
    displayedPage: number,
    stock?: Doc<'stock'>
}

const initialState: StockState = {
    stocks: [],
    itemsPerPage : 50,
    pages : 0,
    displayedPage: 0,

}

export const stockSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        setStock: (state, action: PayloadAction<StockState['stock']>) => {
            state.stock = action.payload
        },

        loadStocks: (state, action: PayloadAction<StockState['stocks']>) => {
            state.stocks = [...state.stocks , ...action.payload] 
        },
        unselectStock:(state,)=>{
            state.stock = undefined
        },
        selectStock:(state,action:PayloadAction<StockState['stock']>)=>{
            state.stock = action.payload
        }
    },
})

export const { setStock,selectStock,unselectStock,loadStocks } = stockSlice.actions

export default stockSlice.reducer