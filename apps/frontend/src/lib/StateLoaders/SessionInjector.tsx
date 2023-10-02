

import { useLoadSessionWorkers } from "@/hooks/useSesionWorker";
import { useLoadActiveSession } from "@/hooks/useSession"


export default function SessionInjector() {

    useLoadActiveSession()

    return <></>
}