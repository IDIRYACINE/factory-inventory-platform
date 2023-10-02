import { Doc } from '@convex/_generated/dataModel';
import Dexie, { Table } from 'dexie';

type Inventory = Doc<"inventory">;
type Stock = Doc<"stock">;
type ProductFamily = Doc<"familyCode">;
type SessionWorker = Doc<"sessionWorkers">;
type SessionGroup = Doc<"sessionGroups">;
type Workers = Doc<"workers">;
type Affectations = Doc<"affectations">;
type Users = Doc<"user">;

type CacheKeys = 'inventoryVersion' | 'stockVersion' | 'usersVersion' | 'productFamilyVersion' | 'sessionWorkerVersion' | 'sessionGroupVersion' | 'workersVersion' | 'affectationsVersion';

export type CacheMetadata = {
    _id: CacheKeys;
    version: number;
}

export type CacheState = {
    [key:string]: number
}

export const cacheKeys ={
    inventoryVersion: 'inventoryVersion',
    stockVersion: 'stockVersion',
    usersVersion: 'usersVersion',
    productFamilyVersion: 'productFamilyVersion',
    sessionWorkerVersion: 'sessionWorkerVersion',
    sessionGroupVersion: 'sessionGroupVersion',
    workersVersion: 'workersVersion',
    affectationsVersion: 'affectationsVersion',
}

export const cacheKeysArray = Object.keys(cacheKeys) as CacheKeys[]

export class MySubClassedDexie extends Dexie {
    inventory!: Table<Inventory>;
    stock!: Table<Stock>;
    productFamily!: Table<ProductFamily>;
    sessionWorker!: Table<SessionWorker>;
    sessionGroup!: Table<SessionGroup>;
    workers!: Table<Workers>;
    affectations!: Table<Affectations>;
    cacheMetadata!: Table<CacheMetadata>;
    users!: Table<Users>;



    constructor() {
        super('factoryInventoryCache');
        this.version(1).stores({
            inventory: '++_id, articleCode, stockCode,familyCode',
            stock: '++_id, articleCode, familyCode',
            productFamily: '++_id, code',
            sessionWorker: '++_id, workerId',
            sessionGroup: '++_id, groupId',
            workers: '++_id, workerId',
            affectations: '++_id, affectationCode',
            cacheMetadata: '++_id',
            users: '++_id, tokenIdentifier'
        });
    }
}

export const db = new MySubClassedDexie();