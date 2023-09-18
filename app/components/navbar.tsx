import Image from "next/image";
import React from "react";
import ArrowLeftIcon from "./icons/arrow-left";
import SearchIcon from "./icons/search";
import BellIcon from "./icons/bell";
import UnfoldIcon from "./icons/unfold";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 sm:ml-60 w-full sm:w-[calc(100%-15rem)] bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-7 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start w-full flex-1">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center gap-5 flex-1">
              <ArrowLeftIcon />

              <form className="flex-1 max-w-[31.25rem]">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-[2.87rem] text-base rounded-[0.31rem] border-[1px] border-[#DBE1F1] placeholder:text-[#B0B5C5] font-medium"
                    placeholder="Search Activity"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className="flex items-center ml-3">
              <div className="flex items-center gap-6">
                <BellIcon />
                <button
                  type="button"
                  className="flex gap-3 text-sm items-center"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    width={32}
                    height={32}
                    className="w-10 h-10 rounded-[0.38rem]"
                    src="https://i.pravatar.cc/300"
                    alt="user photo"
                    objectFit="cover"
                  />
                  <div className="flex flex-col gap-1 items-start mr-6">
                    <p className="text-base font-semibold text-[#292929]">
                      Kazak Clay
                    </p>
                    <p className="text-xs font-semibold text-[#A8A9AA]">
                      Designer
                    </p>
                  </div>
                  <UnfoldIcon />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
