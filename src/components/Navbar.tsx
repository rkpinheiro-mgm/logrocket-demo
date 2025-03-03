import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  disableBack?: boolean;
}

export const Navbar = ({ disableBack }: NavbarProps) => {
  const { username } = useAuth();
  return (
    <header>
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {!disableBack && (
              <Link className="text-gray-300 hover:text-white" href="/">
                ⬅ go to home
              </Link>
            )}
          </div>
          <ul className="flex space-x-4">
            <li>
              <span className="text-gray-300 hover:text-white">
                {username ? `Welcome, ${username}` : "Anonymous User"}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
