import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GroupsState {
    groups : Doc<'sessionGroups'>[],
}

const initialState: GroupsState = {
    groups: [],

}

export const sessionGroupsSlice = createSlice({
    name: 'sessionGroups',
    initialState,
    reducers: {
        setSessionGroups: (state, action: PayloadAction<GroupsState['groups']>) => {
            state.groups = action.payload
        }
    },
})

export const { setSessionGroups } = sessionGroupsSlice.actions

export default sessionGroupsSlice.reducer