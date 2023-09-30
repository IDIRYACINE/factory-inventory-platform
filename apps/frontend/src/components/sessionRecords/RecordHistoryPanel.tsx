import HistoryTable from "./RecordHistoryTable"
import HistoryTableActions from "./RecordHistoryTableActions"


export const HistoryPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <HistoryTableActions className="gap-4 mb-4 w-full"/>
            <HistoryTable className="h-full w-full" />
        </div>
    )
}