import UserTable from "./UserTable"
import UserTableActions from "./UserTableActions"


export const UsersPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <UserTableActions className="gap-4 mb-4 w-full"/>
            <UserTable className="h-full w-full" />
        </div>
    )
}