import ServerProviders from '@/lib/ServerProviders';
import './globals.css'

import { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Inventory App',
  description:
    '',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <body className="h-screen" >
        <ServerProviders>
          {children}
        </ServerProviders>
      </body>
    </html>
  )
}
