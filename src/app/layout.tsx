import './globals.css'
import type { Metadata } from 'next'
import {Roboto} from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContentWrapper from "@/app/ContentWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";


const roboto = Roboto({weight:["400", "500", "300"], subsets:["latin"], preload: true})

export const metadata: Metadata = {
  title: 'Home :: actuview',
  description: 'Generated by create next app',
  manifest: "/manifest.json",
  themeColor:"#fff"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`text-primary_text bg-background_main text-base ${roboto.className}`}>
        <main className={`relative`}>
          <Header/>
          <Sidebar/>
          <ContentWrapper>
            {children}
            <Footer/>
          </ContentWrapper>
        </main>
      </body>
    </html>
  )
}
