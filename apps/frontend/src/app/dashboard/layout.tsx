"use client";

import MainLayout from '@/lib/MainLayout';



export default function DashbaordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <MainLayout>
          {children}
      </MainLayout>

  )
}
