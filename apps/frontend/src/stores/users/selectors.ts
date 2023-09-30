import { RootState } from "../store";



export const selectUsers = (state: RootState) => state.users.users

export const selectActiveUser = (state: RootState) => state.users.user


export const selectUserPermissions = (state: RootState) => state.users.userPermissions

export const selectActivePermission = (state: RootState) => state.users.activePermission