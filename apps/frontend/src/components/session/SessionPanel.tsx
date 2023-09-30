import SessionRecordTable from "./SessionRecordTable"
import SessionRecordTableActions from "./SessionRecordTableActions"


export const SessionPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <SessionRecordTableActions className="gap-4 mb-4 w-full" />
            <SessionRecordTable className="h-full w-full" />
        </div>
    )
}