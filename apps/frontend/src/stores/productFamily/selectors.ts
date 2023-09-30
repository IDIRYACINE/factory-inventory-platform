import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import binarySearch from "@/utility/binarySearch";
import { ProductFamilyState } from "./slice";
import { numericSimilarityProbability } from "@/utility/comparators";



const selectFamillies = (state: RootState) => state.familyCodes.familyCodes

const selectDisplayedPage = (state: RootState) => state.familyCodes.displayedPage

export const selectFamilyCodesPaginated = createSelector(
    [selectFamillies, selectDisplayedPage], (familyCodes, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > familyCodes.length ? familyCodes.length : stopIndex

        return familyCodes.slice(displayedPage * 50, stopIndex)
    }
)


export const selectFamilyCode = (state: RootState) => state.familyCodes.familyCode

export const selectLoadedFamilyCodes = (state: RootState) => state.familyCodes.loaded

export const selectFamilyCodes = (state: RootState) => state.familyCodes.familyCodes


// type FamilyCode = NonNullable<ProductFamilyState['familyCode']>

// export const selectSearchFamilyCodes = createSelector(
//     [selectFamilyCodes], (familyCodes) => {

//         const similarity = (target: number, element: FamilyCode) => {
//             return numericSimilarityProbability(target, element.code)
//         }

//         const compare = (target: number, element: FamilyCode) => {
//             return target - element.code
//         }

//         const targetIndex = binarySearch<FamilyCode, number>(
//             {
//                 list: familyCodes,
//                 target: 0,
//                 similarity,
//                 compare
//             }
//         )
//     }

// )