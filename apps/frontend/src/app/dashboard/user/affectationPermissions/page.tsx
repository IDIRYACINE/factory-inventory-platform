import StateLoader from "@/lib/StateLoaders/StateLoader";
import AffectationsInjector from "@/lib/StateLoaders/AffectationInjector";
import { AffectationsPanel } from "@/components/affectation/AffectationPanel";

export default function AffectationsPage() {
    return (
        <>
            <StateLoader injector={<AffectationsInjector />} />
            <AffectationsPanel />
        </>
    )
}