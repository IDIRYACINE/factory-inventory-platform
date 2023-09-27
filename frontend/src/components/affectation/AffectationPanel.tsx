import AffectationTable from "./AffectationTable"
import AffectationTableActions from "./AffectationTableActions"


export const AffectationPanel = () => {


    return (
        <div className="h-full w-full p-4 flex flex-col justify-start items-start">
            <AffectationTableActions className="gap-4 mb-4 w-full"/>
            <AffectationTable className="h-full w-full" />
        </div>
    )
}