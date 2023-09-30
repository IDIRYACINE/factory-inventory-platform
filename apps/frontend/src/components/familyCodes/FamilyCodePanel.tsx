import FamilyCodeTable from "./FamilyCodesTable"
import FamilyCodeTableActions from "./FamilyCodesTableActions"


export const FamilyCodePanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <FamilyCodeTableActions className="gap-4 mb-4 w-full"/>
            <FamilyCodeTable className="h-full w-full" />
        </div>
    )
}