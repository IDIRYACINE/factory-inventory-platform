import { RootState } from "../store";


export const selectGroups = (state: RootState) => state.sessionGroups.groups

export const selectActiveGroup = (state: RootState) => state.sessionGroups.activeGroup