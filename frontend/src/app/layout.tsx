import { AntdThemeProvider } from '@/lib/AntdThemeConfig';
import './globals.css'

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import MainLayout from '@/lib/MainLayout';
import ConvexClientProvider from '@/lib/ConvexProvider';
import { ClerkProvider } from '@clerk/nextjs';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen" >
        <StyledComponentsRegistry>
          <AntdThemeProvider>
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
              <ConvexClientProvider convexDomain={process.env.NEXT_PUBLIC_CONVEX_URL!}>
                <MainLayout>
                  {children}
                </MainLayout>
              </ConvexClientProvider>
            </ClerkProvider>
          </AntdThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
