import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const selectStock = (state: RootState) => state.stock.stock

export const selectStocks = (state: RootState) => state.stock.stocks

const selectDisplayedPage = (state: RootState) => state.stock.displayedPage

export const selectStocksPaginated = createSelector(
    [selectStocks, selectDisplayedPage], (stocks, displayedPage) => {

        let stopIndex = (displayedPage + 1) * 50
        stopIndex = stopIndex > stocks.length ? stocks.length : stopIndex

        return stocks.slice(displayedPage * 50, stopIndex)
    }
)

export const selectLoadedStocks = (state: RootState) => state.stock.loaded