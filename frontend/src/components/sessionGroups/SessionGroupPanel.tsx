import SessionGroupTable from "./SessionGroupTable";
import SessionGroupTableActions from "./SessionGroupTableActions";



export default function SessionGroupPanel() {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <SessionGroupTableActions className="gap-4 mb-4 w-full" />
            <SessionGroupTable className="h-full w-full" />
        </div>
    )
}