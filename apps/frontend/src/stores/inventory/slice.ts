import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InventoryState {
    inventories : Doc<'inventory'>[],
    itemsPerPage : number,
    pages : number,
    displayedPage: number,
    inventory?: Doc<'inventory'>
}

const initialState: InventoryState = {
    inventories: []
    ,itemsPerPage : 50,
    pages : 0,
    displayedPage: 0,
    inventory: undefined

}

export const inventorySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setInventory: (state, action: PayloadAction<InventoryState['inventories']>) => {
            state.inventories = action.payload
        },
        loadInventories: (state, action: PayloadAction<InventoryState['inventories']>) => {
            state.inventories = [...state.inventories , ...action.payload] 
        },
        unselectInventor:(state,)=>{
            state.inventory = undefined
        },
        selectInventory:(state,action:PayloadAction<InventoryState['inventory']>)=>{
            state.inventory = action.payload
        }

    },
})

export const { setInventory,selectInventory,unselectInventor,loadInventories } = inventorySlice.actions

export default inventorySlice.reducer