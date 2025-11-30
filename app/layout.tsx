import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ToastProvider } from "@/hooks/use-toast"
import "./globals.css"

// Loading Cairo font for Arabic text
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "وشاح ميكاسا - Mikasa Scarf Morocco",
  description: "وشاح ميكاسا الأصلي من Attack on Titan. جودة عالية، توصيل سريع داخل المغرب. الدفع عند الاستلام.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.jpg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  openGraph: {
    title: "وشاح ميكاسا الأصلي - Mikasa Scarf Morocco",
    description:
      "وشاح ميكاسا الأصلي من Attack on Titan. اشتري 2 احصل على 3! جودة عالية، توصيل سريع، الدفع عند الاستلام.",
    url: "https://mikasa-scarf.vercel.app",
    siteName: "Mikasa Scarf Morocco",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "وشاح ميكاسا الأصلي",
      },
    ],
    locale: "ar_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وشاح ميكاسا الأصلي - Mikasa Scarf Morocco",
    description: "وشاح ميكاسا الأصلي من Attack on Titan. اشتري 2 احصل على 3!",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <ToastProvider>{children}</ToastProvider>
        <Analytics />
      </body>
    </html>
  )
}
