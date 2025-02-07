import type { Metadata } from "next";
import "../styles/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import NavbarContainer from "../containers/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <body className="bg-gray-50 dark:bg-gray-900">
          <NavbarContainer />
          {children}
        </body>
      </Flowbite>
    </html>
  );
}
