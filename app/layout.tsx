import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Scholé AI | Personalized Learning at Scale",
  description: "Scholé AI | Personalized Learning at Scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
