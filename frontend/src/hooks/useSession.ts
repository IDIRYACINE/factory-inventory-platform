import { useAppDispatch, useAppSelector } from "@/stores/hooks"
import { selectActiveSession, selectActiveSessionRecords } from "@/stores/session/selectors";
import { loadRecords, setActiveSession } from "@/stores/session/slice";
import { api } from "@convex/_generated/api";
import { useMutation, usePaginatedQuery, useQuery } from "convex/react";
import { useEffect } from "react";



export const useReadActiveSession = () => {
    const session = useAppSelector(selectActiveSession)


    return session;
}


export const useReadActiveSessionRecords = () => {
    const records = useAppSelector(selectActiveSessionRecords)

    return records;
}

export const useLoadActiveSessionRecords = () => {
    const { results, status, loadMore } = usePaginatedQuery(api.session.loadRecords, {active:true}, { initialNumItems: 50 })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (results.length > 0) {
            dispatch(loadRecords(results))
        }
    }, [dispatch, results])

    return { status, loadMore }
}

export const useLoadActiveSession = () => {
    const session = useQuery(api.session.getActiveSession, {})

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (session?.session) {
            dispatch(setActiveSession(session.session))
        }
    }, [dispatch, session])
}


export const useCloseSession = () => {
    const closeSesion = useMutation(api.session.closeSession)

    return closeSesion
}

export const useOpenSession = () => {
    const openSession = useMutation(api.session.openSession)

    return openSession
}