import { FamilyCodePanel } from "@/components/familyCodes/FamilyCodePanel";
import FamilyCodesInjector from "@/lib/StateLoaders/FamilyCodesInjector";
import StateLoader from "@/lib/StateLoaders/StateLoader";

export default function ProductFamilyPage() {
    return (
        <>
            <FamilyCodePanel />
            <StateLoader injector={<FamilyCodesInjector/>} />
        </>
    )
}