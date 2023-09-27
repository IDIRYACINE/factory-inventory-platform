import PermissionTable from "./PermissionsTable"
import PermissionTableActions from "./PermissionsTableActions"


export const PermissionPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <PermissionTableActions className="gap-4 mb-4 w-full"/>
            <PermissionTable className="h-full w-full" />
        </div>
    )
}