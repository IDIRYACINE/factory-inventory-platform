import WorkersTable from "./WorkersTable"
import WorkersTableActions from "./WorkersTableActions"


export const WorkersPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <WorkersTableActions className="gap-4 mb-4 w-full"/>
            <WorkersTable className="h-full w-full" />
        </div>
    )
}