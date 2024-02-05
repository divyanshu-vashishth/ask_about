import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import Header from "@/components/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
    <html lang="en" className={GeistSans.className}>
      <body className="font-sans grainy antialiased bg-white">
        <Header/>
        <main className="min-h-screen flex flex-col items-center">
          
          {children}
        </main>
      </body>
    </html>
    </ReactQueryClientProvider>
  );
}
