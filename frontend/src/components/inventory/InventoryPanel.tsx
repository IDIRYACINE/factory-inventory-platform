import InventoryTable from "./InventoryTable"
import InventoryTableActions from "./InventoryTableActions"


export const InventoryPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <InventoryTableActions className="gap-4 mb-4 w-full"/>
            <InventoryTable className="h-full w-full" />
        </div>
    )
}