import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import { ROOT_ROUTE, TICKETS_ROUTE } from "@/routes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next first app",
  description: "My first app using Next.JS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 left-0 px-4 py-4 border-b backdrop-blur-sm">
          <nav className="flex gap-4">
            <Link
              className="px-4 py-2 underline border rounded-md hover:bg-slate-500 transition"
              href={ROOT_ROUTE()}
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 underline border rounded-md hover:bg-slate-500 transition"
              href={TICKETS_ROUTE()}
            >
              Tickets
            </Link>
          </nav>
        </header>

        <main className="max-w-7xl w-full px-4 py-4 mx-auto">{children}</main>
      </body>
    </html>
  )
}
