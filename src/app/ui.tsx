'use client'

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { NextUIProvider } from "@nextui-org/react";

export default function UiProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <NextUIProvider>
      <Header/>
      {children}
      <Footer/>
    </NextUIProvider>
  )
}
