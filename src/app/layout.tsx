'use client';
import Header from './components/header';
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header><Header/></header>
      <body>{children}</body>
    </html>
  )
}
