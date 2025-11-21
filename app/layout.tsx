import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import { AppProvider } from "@/context/app-context";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schema – Turn your fixed timetable into a data-driven study engine",
  description:
    "Smart scheduling web app for students who need structure without rigid enforcement. Track your focus, consistency, and subject mastery through a clean, weightless dark-mode interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-[var(--background)] text-[var(--foreground)]`}>
        <AppProvider>
          <Navigation />
          <div className="pt-24">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
