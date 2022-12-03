import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex lg:flex-row md:flex-row flex-col justify-around items-start">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              <span className="text-blue-600">S</span>tudent{" "}
              <span className="text-blue-600">I</span>ntegration
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-4xl cursor-pointer text-pink-400" />
              <FaTwitter className="text-4xl cursor-pointer text-blue-500" />
              <FaLinkedin className="text-4xl cursor-pointer text-blue-600" />
              <FaYoutube className="text-4xl cursor-pointer text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Destinations
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              United Kingdom
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Australia
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Canada
            </li> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Site Map</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/destinations"> Explore Destinations</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/universities"> Explore Universities</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/courses"> Explore Courses</Link>
            </li>

            {/* <Link href="/news">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Latest News
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">About us</p>
            <Link href={"/contact"}>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>
            </Link>
            <Link href={"mailto:studyabroad@studentint.com"}>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Ask a Query
              </li>
            </Link>
            <Link href="/apply">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Apply for Universities
              </li>
            </Link>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold text-xl">
          © 2022 Student Integration Limited. All rights reserved.{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            {" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
