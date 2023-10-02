

import { InventoryState, setInventory } from "@/stores/inventory/slice";
import { CacheState, cacheKeys, cacheKeysArray, db } from "./db"
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { StockState, setStocks } from "@/stores/stock/slice";
import { ProductFamilyState, setFamilyCodes } from "@/stores/productFamily/slice";
import { AffectationState, setAffectations } from "@/stores/affectations/slice";
import { GroupsState, setSessionGroups } from "@/stores/groups/slice";
import { WorkersState, setSessionWorkers, setWorkers } from "@/stores/workers/slice";
import { UsersState, setUsers } from "@/stores/users/slice";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { setBrowserCache, setConvexCache } from "@/stores/settings/slice";

type GenericCacheArgs = {
    _id: string;
    version: number;
}


type InventoryCacheArgs = { items: InventoryState['inventories'] } & GenericCacheArgs;
export const useCacheInventory = () => {

    const handleCache = async ({ items, _id, version }: InventoryCacheArgs) => {
        db.inventory.clear()
        db.inventory.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}


export const useLoadCacheInventory = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.inventory.toArray().then((cache) => {
            dispatch(setInventory(cache))
        })
    }, [dispatch])

}

export const useReadCacheMetadata = () => {
    const cacheMetadata = useAppSelector(state => state.settings.browserCache)

    return cacheMetadata
}

export const useReadConvexCache = () => {
    const cacheMetadata = useAppSelector(state => state.settings.convexCache)

    return cacheMetadata
}

export const useLoadCacheMetadata = () => {

    const cacheMetadata = useReadCacheMetadata()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (cacheMetadata) return

        db.cacheMetadata.toArray().then((cachesArray) => {

            const caches: { [key: string]: number } = {

            }

            cachesArray.forEach(cache => {
                caches[cache._id] = cache.version
            })


            if (caches[cacheKeys.affectationsVersion] === undefined) {

                cacheKeysArray.forEach(async (cache) => {
                    caches[cache] = -1
                    await db.cacheMetadata.add({ _id: cache, version: -1 })
                })
            }

            dispatch(setBrowserCache(caches))
        })

    }, [dispatch, cacheMetadata])


    return cacheMetadata
}

type StockCacheArgs = { items: StockState['stocks'] } & GenericCacheArgs;
export const useCacheStock = () => {

    const handleCache = async ({ items, _id, version }: StockCacheArgs) => {
        db.stock.clear()
        db.stock.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheStock = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.stock.toArray().then((cache) => {
            dispatch(setStocks(cache))

        })
    }, [dispatch])



}

type ProductFamilyCacheArgs = { items: ProductFamilyState['familyCodes'] } & GenericCacheArgs;
export const useCacheProductFamily = () => {

    const handleCache = async ({ items, _id, version }: ProductFamilyCacheArgs) => {
        db.productFamily.clear()
        db.productFamily.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheProductFamily = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.productFamily.toArray().then((cache) => {
            dispatch(setFamilyCodes(cache))
        })
    }, [dispatch])

}

type AffectationsCacheArgs = { items: AffectationState['affectations'] } & GenericCacheArgs;
export const useCacheAffectations = () => {


    const handleCache = async ({ items, _id, version }: AffectationsCacheArgs) => {
        db.affectations.clear()

        db.affectations.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheAffectations = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.affectations.toArray().then((cache) => {
            dispatch(setAffectations(cache))
        })
    }, [dispatch])

}

type SessionGroupsCacheArgs = { items: GroupsState['groups'] } & GenericCacheArgs;
export const useCacheSessionGroups = () => {

    const handleCache = async ({ items, _id, version }: SessionGroupsCacheArgs) => {
        db.sessionGroup.clear()

        db.sessionGroup.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheSessionGroups = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.sessionGroup.toArray().then((cache) => {
            dispatch(setSessionGroups(cache))
        })
    }, [dispatch])

}


type SessionWorkersCacheArgs = { items: WorkersState['sessionWorkers'] } & GenericCacheArgs;
export const useCacheSessionWorkers = () => {

    const handleCache = async ({ items, _id, version }: SessionWorkersCacheArgs) => {
        db.sessionWorker.clear()

        db.sessionWorker.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheSessionWorkers = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.sessionWorker.toArray().then((cache) => {
            dispatch(setSessionWorkers(cache))
        })
    }, [dispatch])

}

type WorkersCacheArgs = { items: WorkersState['workers'] } & GenericCacheArgs;
export const useCacheWorkers = () => {

    const handleCache = async ({ items, _id, version }: WorkersCacheArgs) => {
        db.workers.clear()

        db.workers.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheWorkers = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.workers.toArray().then((cache) => {
            dispatch(setWorkers(cache))
        })
    }, [dispatch])

}

type UsersCacheArgs = { items: UsersState['users'] } & GenericCacheArgs;
export const useCacheUsers = () => {

    const handleCache = async ({ items, _id, version }: UsersCacheArgs) => {
        db.users.clear()

        db.users.bulkAdd(items)
        db.cacheMetadata.update(_id, { version: version })
    }

    return handleCache
}

export const useLoadCacheUsers = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        db.users.toArray().then((cache) => {
            dispatch(setUsers(cache))
        })
    }, [dispatch])

}



export const useLoadConvexCache = () => {
    const convexCacheState = useQuery(api.cache.readCache)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (convexCacheState) {
            dispatch(setConvexCache(convexCacheState))
        }
    }, [dispatch, convexCacheState])

    return convexCacheState
}