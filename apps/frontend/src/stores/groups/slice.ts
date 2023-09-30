import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GroupsState {
    groups : Doc<'sessionGroups'>[],
    activeGroup?: Doc<'sessionGroups'>
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
        },
        selectActiveGroup: (state, action: PayloadAction<Doc<'sessionGroups'>>) => {
            state.activeGroup = action.payload
        },
        resetActiveGroup: (state) => {
            state.activeGroup = undefined
        }
    },
})

export const { setSessionGroups,selectActiveGroup,resetActiveGroup } = sessionGroupsSlice.actions

export default sessionGroupsSlice.reducer