import { CacheState } from "@/utility/caching/db"


export type InjectorProps = {
        convexCacheState: CacheState,
        browserCacheState: CacheState
    }

export type UpdateInjectorProps = Omit<InjectorProps,'browserCacheState'>

export type InjectorComponent = ({ convexCacheState, browserCacheState }: InjectorProps) => JSX.Element
