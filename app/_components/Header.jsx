"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="bg-slate-900 -mr-2 -ml-2 -mb-2 -mt-2 p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-white  font-bold text-xl hover:cursor-pointer">Handy Wallet</span>
      </div>
      {isSignedIn ? (
        <div className="flex justify-center">
          <div className="pr-4">
          <Link  href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          </div>
          <div className="pt-1">
            <UserButton />
          </div>
        </div>
         //userbutton is true
      ) : (
        <div className="flex gap-3  items-center">
          <Link  href={"/sign-in"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
