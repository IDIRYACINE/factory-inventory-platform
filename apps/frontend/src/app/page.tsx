import { sessionsPath } from "@/domain/routerPaths"
import { RedirectType, redirect } from "next/navigation"


export default async function Home() {
  redirect(sessionsPath,RedirectType.replace)
}

