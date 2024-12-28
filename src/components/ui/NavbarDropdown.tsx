"use client";

import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Avatar name="Joe" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
          <div
            onClick={() => handleNavigation("/profile")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            Profile
          </div>
          <div
            onClick={() => handleNavigation("/profile/setting")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            Settings
          </div>
          <div
            onClick={() => handleNavigation("/profile/create-post")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            Create Post
          </div>
          <div
            onClick={() => handleNavigation("/profile/claim-requests")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            Claim Requests
          </div>
          <div
            onClick={() => handleNavigation("/profile/about")}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => handleNavigation("/logout")}
            className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
