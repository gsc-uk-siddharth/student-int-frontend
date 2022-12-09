import React from "react";
import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [dropDownState, setdropDownState] = useState("block");
  return (
    <nav className=" fixed top-0 z-10 bg-blend-color bg-gray-50 backdrop-blur-sm text-white w-full border-b-2 border-gray-900  dark:border-gray-600 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/si-logo.png"
            className="  h-20 w-50 object-cover dark:invert"
            alt="Student Integration Logo"
          />
        </Link>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 text-lg  font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="text-sm md:text-xl flex justify-between text-black items-center py-2 pr-4 pl-3 focus:text-blue-600 w-full font-medium  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Get Advice{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li className="md:hidden lg:block">
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="text-sm md:text-xl flex justify-between items-center focus:text-blue-700 py-2 pr-4 pl-3 w-full font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Find a Course{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li className="md:hidden lg:hidden">
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" text-sm md:text-xl flex justify-between items-center focus:text-blue-700 py-2 pr-4 pl-3 w-full font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Study destination{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li className="lg:hidden xl:block md:hidden">
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" text-sm md:text-xl flex justify-between items-center focus:text-blue-600 py-2 pr-4 pl-3 w-full font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Services{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li className="lg:block xl:block md:block">
              <Link
                href="https://notionforms.io/forms/student-integration"
                className="text-sm  underline md:text-xl flex justify-between items-center pr-4 pl-3 py-2 text-black border-b focus:text-blue-600 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Get in touch
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={
          "mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden"
        }
      >
        <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <Link
                href="/blogs/cost-of-studying-abroad"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-blue-700"
              >
                <div className="font-semibold">Cost of Studying Abroad</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Find the cost of studying at your desired destination
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs/financial-assistance-for-higher-education-in-the-uk"
                className="block p-3 rounded-lg  hover:bg-gray-200  focus:text-blue-600  dark:hover:bg-blue-700"
              >
                <div className="font-semibold">Funding Guides</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Funding guides which can answer all your financial queries
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs/scholarships-for-indian-students-looking-to-study-in-australia"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Find Scholarships</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  All about Scholarships and how to bang one
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="/blogs"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Study Abroad Articles</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Articles which will help you Study Abroad
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/schools"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Subject Guides</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Guides which will help you choose your subject of interest
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Browse All Courses</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Step by step guidance for your journey abroad
                </span>
              </Link>
            </li>
          </ul>
          <ul className="hidden md:block">
            <li>
              <Link
                href="/courses"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Browse All Subjects</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Find about all the subjects offered
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/destinations"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold"> Browse All Destinations</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Get to know everything about your countries of interest
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://notionforms.io/forms/student-integration"
                className="block p-3 rounded-lg hover:bg-gray-200  focus:text-blue-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Contact Us</div>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Feel free to contact us for any assistance
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
    </nav>
  );
};

export default Navbar;
