import { SignIn } from "@clerk/nextjs";
import { ReactElement } from "react";

export default function SigninPage() {
  return <SignIn />;
}

SigninPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {page}
    </div>
  )
}