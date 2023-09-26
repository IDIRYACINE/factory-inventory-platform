import { AntdThemeProvider } from '@/lib/AntdThemeConfig';
import './globals.css'

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import MainLayout from '@/lib/MainLayout';


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
            <MainLayout>
              {children}
            </MainLayout>
          </AntdThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
