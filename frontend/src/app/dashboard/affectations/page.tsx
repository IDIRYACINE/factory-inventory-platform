import { AffectationsPanel } from "@/components/affectation/AffectationPanel";
import AffectationInjector from "@/lib/StateLoaders/AffectationInjector";
import StateLoader from "@/lib/StateLoaders/StateLoader";

export default function AffectationsPage() {
    return (
        <>
            <StateLoader injector={<AffectationInjector />} />
            <AffectationsPanel />
        </>
    )
}