import Header from './components/header';
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header/>
      <body>{children}</body>
    </html>
  )
}
