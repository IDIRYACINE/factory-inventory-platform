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
    <html lang="en">
      <body className="h-screen" >
        {children}
      </body>
    </html>
  )
}
