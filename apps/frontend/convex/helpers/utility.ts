import { GenericDatabaseWriter } from "convex/server";
import { DataModel } from "../_generated/dataModel";

type CacheKeys = 'inventoryVersion' | 'stockVersion' | 'usersVersion' | 'productFamilyVersion' | 'sessionWorkerVersion' | 'sessionGroupVersion' | 'workersVersion' | 'affectationsVersion';



const incrementCacheVersion = async (db: GenericDatabaseWriter<DataModel>, key: CacheKeys) => {

    const cache = await db.query('cache').filter((q) => q.eq('name', key)).first()

    if (!cache) return

    await db.patch(cache._id, { version: cache.version + 1 })
}


export const incrementInventoryCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'inventoryVersion')
}

export const incrementStockCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'stockVersion')
}

export const incrementUsersCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'usersVersion')
}

export const incrementProductFamilyCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'productFamilyVersion')
}

export const incrementSessionWorkerCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'sessionWorkerVersion')
}

export const incrementSessionGroupCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'sessionGroupVersion')
}



export const incrementWorkersCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'workersVersion')

}

export const incrementAffectationsCacheVersion = async (db: GenericDatabaseWriter<DataModel>) => {
    await incrementCacheVersion(db, 'affectationsVersion')
}