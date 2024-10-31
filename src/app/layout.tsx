import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/AuthOption";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campbooker",
  description: "Escape to Nature, Reserve Your Spot Today!",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Session = await getServerSession(authOption)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={Session}>
            <TopMenu/>
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
