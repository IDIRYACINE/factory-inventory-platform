import { CacheState } from "@/utility/caching/db"


export type InjectorProps = {
    convexCacheState: CacheState,
    browserCache: CacheState
}

export type UpdateInjectorProps = Omit<InjectorProps, 'browserCache'>

export type InjectorComponent = () => JSX.Element
