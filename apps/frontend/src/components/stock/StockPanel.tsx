import StockTable from "./StockTable"
import StockTableActions from "./StockTableActions"


export const StockPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <StockTableActions className="gap-4 mb-4 w-full" />
            <StockTable className="h-full w-full" />
        </div>
    )
}