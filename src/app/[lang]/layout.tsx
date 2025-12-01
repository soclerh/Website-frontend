import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; // Ensure this path is correct based on where you put globals.css
import Header from "@/components/layout/Header";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import { getGlobalData } from "@/data/loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Socle RH",
  description: "Transform Your HR Strategy with Socle RH",
};

// 1. Define props to accept params
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // Next.js 15 requires awaiting params
}) {
  // 2. Await and extract the language
  const { lang } = await params;

  // 3. Fetch global data using the dynamic language
  const globalData = await getGlobalData(lang);

  const headerData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "layout.header"
  );

  const ctaData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "global.cta"
  );

  const footerData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "global.footer"
  );

  return (
    // 4. Set the html lang attribute dynamically
    <html lang={lang}>
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* 5. Pass lang to Header so the switcher works */}
        <Header data={headerData} lang={lang} />

        <main className="grow">{children}</main>

        <CTA data={ctaData} />
        <Footer data={footerData} />
      </body>
    </html>
  );
}
