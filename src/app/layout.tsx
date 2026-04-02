import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: "400",
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emith Jayasuriya | Portfolio",
  description: "Computer Science Undergraduate Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      {/* Anti-flash: set dark class before React hydrates */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('theme');if(saved==='dark'||(saved===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
