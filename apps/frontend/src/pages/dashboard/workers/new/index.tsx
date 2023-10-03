import WorkerForm from "@/components/workers/WorkerForm";


export default function NewWorkerPage() {

    return (
        <div className="p-4 flex flex-col flex-start items-start">
            <WorkerForm />
        </div>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale