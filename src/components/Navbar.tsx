"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link href="/">Home</Link>
      <div>
        {user ? (
          <>
            <button onClick={logout} className="mr-4">
              Logout
            </button>
            <Link href="/dashboard">Dashboard</Link>
          </>
        ) : (
          <>
            <Link href="/login" className="mr-4">
              Login
            </Link>
            <Link href="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
