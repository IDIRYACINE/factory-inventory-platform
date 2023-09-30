import SessionWorkerTable from "./SessionWorkerTable";
import SessionWorkerTableActions from "./SessionWorkerTableActions";



export default function SessionWorkerPanel() {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <SessionWorkerTableActions className="gap-4 mb-4 w-full" />
            <SessionWorkerTable className="h-full w-full" />
        </div>
    )
}