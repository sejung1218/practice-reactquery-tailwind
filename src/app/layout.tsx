"use client";
import Header from "./components/header";
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // html을 div로 변경하면 hydration 에러가 발생하지 않는다.
    // commit시 body는 div의 하위 요소로 표시할 수 없다는 에러메시지 출력됨.
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
