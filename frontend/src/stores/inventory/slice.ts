import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InventoryState {
    inventory : Doc<'inventory'>[],
}

const initialState: InventoryState = {
    inventory: [],

}

export const inventorySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setInventory: (state, action: PayloadAction<InventoryState['inventory']>) => {
            state.inventory = action.payload
        }
    },
})

export const { setInventory } = inventorySlice.actions

export default inventorySlice.reducer