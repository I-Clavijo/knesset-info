"use client";

import { Navbar, DarkThemeToggle } from "flowbite-react";

export default function NavbarContainer() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          כנסת
        </span>
        &nbsp;
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-blue-500 dark:text-blue-500">
          info
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          בית
        </Navbar.Link>

        <Navbar.Link href="#">אודות</Navbar.Link>
        <Navbar.Link href="#">הצטרף</Navbar.Link>
        <Navbar.Link href="#">תרומה</Navbar.Link>
        <Navbar.Link href="#">צור קשר</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
