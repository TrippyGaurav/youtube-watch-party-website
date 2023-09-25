import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skip annoying ads with block youtube ads",
  description:
    "Watch and share videos on YouTube without ads using our extension. Enjoy uninterrupted content on the fun website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.youtubeadblocker.net/" />
        <meta
          name="google-site-verification"
          content="FvkWbaSWuNVOfsyULb1G8jhBfgKFadMURrlsNN7zaVU"
        />

        <meta property="og:url" content="https://www.youtubeadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Skip annoying ads with block youtube ads"
        />
        <meta
          property="og:description"
          content="Watch and share videos on YouTube without ads using our extension. Enjoy uninterrupted content on the fun website"
        />
        <meta
          property="og:image"
          content="https://www.youtubeadblocker.net/navbar-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="youtubeadblocker.net" />
        <meta
          property="twitter:url"
          content="https://www.youtubeadblocker.net/"
        />
        <meta
          name="twitter:title"
          content="Skip annoying ads with block youtube ads"
        />
        <meta
          name="twitter:description"
          content="Watch and share videos on YouTube without ads using our extension. Enjoy uninterrupted content on the fun website"
        />
        <meta
          name="twitter:image"
          content="https://www.youtubeadblocker.net/navbar-logo.svg"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
