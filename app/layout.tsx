import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Olá, Alun!",
  description: "Espero que gostem, e que eu me junte a equipe em breve!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${chakraPetch.variable} antialiased p-4 lg:py-14 xl:pt-[4.5rem]`}
      >
        <ContentWrapper>
          <Header />
          {children}
          <Footer />
        </ContentWrapper>
      </body>
    </html>
  );
}
