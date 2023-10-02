'use client';

import { InventoryState, setInventory } from "@/stores/inventory/slice";
import { CacheState, cacheKeys, cacheKeysArray, db } from "./db"
import { useAppDispatch } from "@/stores/hooks";
import { StockState, setStocks } from "@/stores/stock/slice";
import { ProductFamilyState, setFamilyCodes } from "@/stores/productFamily/slice";
import { AffectationState, setAffectations } from "@/stores/affectations/slice";
import { GroupsState, setSessionGroups } from "@/stores/groups/slice";
import { WorkersState, setSessionWorkers, setWorkers } from "@/stores/workers/slice";
import { UsersState, setUsers } from "@/stores/users/slice";
import { useEffect, useRef, useState } from "react";

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

    const handleLoadCache = async () => {
        const cache = await db.inventory.toArray()
        dispatch(setInventory(cache))
    }

    return handleLoadCache

}

export const useLoadCacheMetadata = () => {

    const [cacheMetadata, setCacheMetadata] = useState<CacheState | undefined>()

    if (cacheMetadata) return cacheMetadata

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

        setCacheMetadata(caches)
    })

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

    const handleLoadCache = async () => {
        const cache = await db.stock.toArray()
        dispatch(setStocks(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.productFamily.toArray()
        dispatch(setFamilyCodes(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.affectations.toArray()
        dispatch(setAffectations(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.sessionGroup.toArray()
        dispatch(setSessionGroups(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.sessionWorker.toArray()
        dispatch(setSessionWorkers(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.workers.toArray()
        dispatch(setWorkers(cache))
    }

    return handleLoadCache

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

    const handleLoadCache = async () => {
        const cache = await db.users.toArray()
        dispatch(setUsers(cache))
    }

    return handleLoadCache

}

