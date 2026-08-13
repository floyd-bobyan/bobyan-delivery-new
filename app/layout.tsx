import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import Header from "./sections/headers";
import Footer from "./sections/footer";
import ReduxProvider from "./redux/providers";
import Modal from "./modals";
import Background from "./sections/bg";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bobyan Delivery",
  description: "Delivery & Logistics Services in Kuwait",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`${notoSans.className} min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Content */}
        <ReduxProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
          
            <Modal />
        </ReduxProvider>

        {/* Background */}
        <Background />
      </body>
    </html>
  );
}
