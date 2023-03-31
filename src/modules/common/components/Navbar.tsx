import Search from "@/modules/beer/components/Search";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="sm:h-24 border-b flex sm:px-0">
      <div className="mx-auto container flex justify-between items-center h-full">
        <Link href="/" className="w-full sm:w-auto">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg tracking-wide border h-full justify-center p-1.5 bg-orange-50/40 order-gray-200/20">
            <h1 className="sm:block hidden">Beer App</h1>
            <Image src="/beer.png" alt="Beer App" height={24} width={24} />
          </div>
        </Link>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
