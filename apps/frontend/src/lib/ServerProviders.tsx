import { AntdThemeProvider } from '@/lib/AntdThemeConfig';

import ConvexClientProvider from '@/lib/ConvexProvider';
import { ClerkProvider } from '@clerk/nextjs';



export default function ServerProviders({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AntdThemeProvider>
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
                <ConvexClientProvider convexDomain={process.env.NEXT_PUBLIC_CONVEX_URL!}>
                    {children}
                </ConvexClientProvider>
            </ClerkProvider>
        </AntdThemeProvider>
    )
}
