"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-teal-700 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Bit'n
      </Link>
      {status === "authenticated" && (
        <div>
          <Link href="/profile">Profile</Link>
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log In</Link>
      )}
      {status === "unauthenticated" && <Link href="/signup">Sign Up</Link>}
    </div>
  );
};

export default NavBar;
