"use client";

import { Footer } from "flowbite-react";

export default function FooterContainer() {
  return (
    <Footer container className="rounded-none mt-4 ">
      <Footer.Copyright
        href="/"
        by=" כנסת info"
        year={2025}
        style={{ textAlign: "center", width: "100%" }}
      />
      {/*<Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>*/}
    </Footer>
  );
}
