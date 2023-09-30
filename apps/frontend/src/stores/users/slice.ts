import { Doc } from '@convex/_generated/dataModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UsersState {
    users : Doc<'user'>[],
    user?: Doc<'user'>,
    userPermissions : Doc<'affectationPermisions'>[],
    activePermission?: Doc<'affectationPermisions'>,
}

const initialState: UsersState = {
    users: [],
    userPermissions : [],
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UsersState['users']>) => {
            state.users = action.payload
        },

        loadUsers: (state, action: PayloadAction<UsersState['users']>) => {
            state.users = [...state.users , ...action.payload] 
        },
        unselectUser:(state,)=>{
            state.user = undefined
        },
        selectUser:(state,action:PayloadAction<UsersState['user']>)=>{
            state.user = action.payload
        },
        setUserPermissions: (state, action: PayloadAction<UsersState['userPermissions']>) => {
            state.userPermissions = action.payload
        },
        selectPermission:(state,action:PayloadAction<UsersState['activePermission']>)=>{
            state.activePermission = action.payload
        },
        unselectPermission:(state,)=>{
            state.activePermission = undefined
        }
    },
})

export const { setUsers,selectUser,unselectUser,loadUsers,setUserPermissions } = UsersSlice.actions
export const { selectPermission,unselectPermission } = UsersSlice.actions

export default UsersSlice.reducer