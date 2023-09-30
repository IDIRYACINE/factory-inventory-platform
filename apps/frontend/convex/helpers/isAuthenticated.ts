import { Auth } from "convex/server";



export const isAuthenticated = async  (auth:Auth) => {

    const identity = await auth.getUserIdentity()

    return identity !== null && identity !== undefined
}