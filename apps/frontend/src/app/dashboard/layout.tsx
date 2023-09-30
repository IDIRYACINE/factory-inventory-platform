import ServerProviders from '@/lib/ServerProviders';

import MainLayout from '@/lib/MainLayout';
import ReduxProvider from '@/lib/ReduxProvider';



export default function DashbaordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ServerProviders>
      <MainLayout>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </MainLayout>
    </ServerProviders>

  )
}
