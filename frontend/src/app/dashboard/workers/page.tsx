import { WorkersPanel } from "@/components/workers/WorkersPanel";
import StateLoader from "@/lib/StateLoaders/StateLoader";
import WorkerInjector from "@/lib/StateLoaders/WorkersInjector";

export default function WorkersPage() {
    return (
        <>
            <StateLoader injector={<WorkerInjector />} />
            <WorkersPanel />
        </>
    )
}