import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strato",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box mb={12}>
            <Navbar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
