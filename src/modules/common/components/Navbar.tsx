import Search from "@/modules/beer/components/Search";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="h-24 border-b flex sm:px-0 px-8">
      <div className="mx-auto container flex justify-between items-center h-full">
        <Link href="/">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg tracking-wide border p-2 bg-orange-50/40 order-gray-200/20">
            <h1 className="">Beer App</h1>
            <Image src="/beer.png" alt="Beer App" height={24} width={24} />
          </div>
        </Link>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
