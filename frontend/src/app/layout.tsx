import ServerProviders from '@/lib/ServerProviders';
import './globals.css'

import MainLayout from '@/lib/MainLayout';
import ReduxProvider from '@/lib/ReduxProvider';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen" >
        <ServerProviders>
          <MainLayout>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </MainLayout>
        </ServerProviders>

      </body>
    </html>
  )
}
