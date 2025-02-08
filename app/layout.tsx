import type { Metadata } from "next";
import "../styles/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import NavbarContainer from "../containers/Navbar";
import Footer from "../containers/Footer";

export const metadata: Metadata = {
  title: "Knesset Info",
  description: "Find Proposed Laws and Bills in the Knesset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark" suppressHydrationWarning>
      <Flowbite>
        <head>
          <ThemeModeScript mode="dark" />
        </head>
        <body className="flex-grow bg-gray-50 dark:bg-gray-900">
          <NavbarContainer />
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </Flowbite>
    </html>
  );
}
