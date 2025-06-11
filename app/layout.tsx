import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // or use "variable" for full range
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ballot - Decentralized Voting Platform",
  description:
    "Create and participate in secure, blockchain-powered polls for better governance and collective decisions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>{children}</body>
    </html>
  )
}
