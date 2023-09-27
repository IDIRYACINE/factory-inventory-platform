"use client";

import { useLoadUsers } from "@/hooks/useUser";



export default function UsersInjector() {

    useLoadUsers()
    
    return null
}