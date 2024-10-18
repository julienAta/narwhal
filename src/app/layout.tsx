import { GeistSans } from 'geist/font/sans'
import ThemeProvider from '@/providers/ThemeProvider'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'
import Navbar from '@/components/Navbar'

import { Toaster } from '@/components/ui/sonner'
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Narwhal',
  description: 'The dog with two tails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}
      style={{ colorScheme: 'dark' }}
    >
      <body className="  text-foreground">
        <NextTopLoader showSpinner={false} height={2} color="#2acf80" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <main className="">
              {/* <Navbar /> */}
              {children}
              <Toaster />
              <Analytics />
            </main>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
