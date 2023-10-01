import { internalMutation,  query } from "./_generated/server";


type CacheKeys = 'inventoryVersion'|'stockVersion'|'usersVersion'|'productFamilyVersion'|'sessionWorkerVersion'|'sessionGroupVersion'|'workersVersion'|'affectationsVersion';

export const initBaseCache = internalMutation({
    args: {},
    handler: async (ctx, args) => {
        const cacheKeys: CacheKeys[] = ['inventoryVersion', 'stockVersion', 'usersVersion', 'productFamilyVersion', 'sessionWorkerVersion', 'sessionGroupVersion', 'workersVersion', 'affectationsVersion'];

        ctx.db
        cacheKeys.forEach(async (key) => {
            await ctx.db.insert('cache',{name:key,version:0})
        });
        
    }
})

export const readCache = query({
    args: {},
    handler: async (ctx, args) => {

        const caches = await ctx.db.query('cache').collect()!

        const cache: { [key: string]: number } = {}

        for (const c of caches) {
            cache[c.name] = c.version
        }

        return cache

    },
})

