import { useAppSelector } from "@/stores/hooks"
import { selectWorkers } from "@/stores/workers/selectors"
import { api } from "@convex/_generated/api";
import { useAction } from "convex/react";



export const useReadWorkers = () => {
    const workers = useAppSelector(selectWorkers)

    return workers
} 


export const useLoadWorkers = () => {
}


export const useMutateWorkers = () => {

}