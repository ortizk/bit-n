"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-teal-700 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Bit'n
      </Link>
      <Link href="/profile">Profile</Link>
      <Link href="/api/auth/signin">Log In</Link>
      <Link href="/api/auth/signout" className="ml-3">
        Sign Out
      </Link>
    </div>
  );
};

export default NavBar;
