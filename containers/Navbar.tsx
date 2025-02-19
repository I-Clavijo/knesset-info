"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";

export default function NavbarContainer() {
  return (
    <Navbar fluid rounded className="rounded-none">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          כנסת
        </span>
        &nbsp;
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-blue-500 dark:text-blue-500">
          info
        </span>
      </Navbar.Brand>
      <DarkThemeToggle />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <p></p>
        {/*<Navbar.Link href="/">בית</Navbar.Link>*/}
        <Navbar.Link href="/about">אודות</Navbar.Link>
        <Navbar.Link href="/join">הצטרף</Navbar.Link>
        <Navbar.Link href="/donate">תרומה</Navbar.Link>
        <Navbar.Link href="/contact">צור קשר</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
