import { UsersPanel } from "@/components/users/UserPanel";
import StateLoader from "@/lib/StateLoaders/StateLoader";
import UsersInjector from "@/lib/StateLoaders/UserInjector";

export default function UsersPage() {
    return (
        <>
            <StateLoader injector={<UsersInjector />} />
            <UsersPanel />
        </>
    )
}