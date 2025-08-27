import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ex1t.cc",
  description: "Data science solutions and analytics platform",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'PP Neue Machina Regular';
              src: url('/fonts/PPNeueMachina-Regular.otf') format('opentype');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'PP Neue Machina Ultrabold';
              src: url('/fonts/PPNeueMachina-Ultrabold.otf') format('opentype');
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }
          `,
          }}
        />
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
