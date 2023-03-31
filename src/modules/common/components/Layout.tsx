import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
