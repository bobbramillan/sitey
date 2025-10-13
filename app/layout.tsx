import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

// ✅ Dynamically set metadata using siteConfig
export const metadata = {
  // 👇 Required in Next 15+ to fix the “metadataBase not set” warning
  metadataBase: new URL("https://sitey-bobbramillan.vercel.app/"),

  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,

  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: "https://sitey-bobbramillan.vercel.app/",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.profileImage || "/og-image.png", // ✅ fallback image
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.profileImage || "/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* 🟣 Background Blobs */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
