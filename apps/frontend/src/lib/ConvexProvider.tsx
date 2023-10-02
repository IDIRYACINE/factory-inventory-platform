

import { ReactNode, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";



function ClerkConvexAdapter({ convex }: { convex: ConvexReactClient }) {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      convex.setAuth(async () =>
        getToken({ template: "convex", skipCache: true })
      );
    } else {
      convex.clearAuth();
    }
  }, [getToken, isSignedIn, convex]);
  return null;
}

export default function ConvexClientProvider({
  children, convexDomain
}: {
  children: ReactNode;
  convexDomain: string
}) {

  const convex = new ConvexReactClient(convexDomain);


  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <ClerkConvexAdapter convex={convex} />
      {children}

    </ConvexProviderWithClerk>
  );
}