import { sessionsPath } from "@/domain/routerPaths"
import { RedirectType, redirect } from "next/navigation"


export default async function Dashbaord() {
  redirect(sessionsPath,RedirectType.replace)
}

