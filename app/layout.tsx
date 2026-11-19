import type { Metadata } from "next";

import "./globals.css";
import Header from "./sections/headers";
import Footer from "./sections/footer";
import ReduxProvider from "./redux/providers";
import Modal from "./modals";
import Background from "./sections/bg";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`min-h-screen flex flex-col overflow-x-hidden`}
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
