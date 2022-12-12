import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 border-t-2 border-gray-900 h-1/2 w-full flex lg:flex-row md:flex-row flex-col justify-around items-start">
        <div className="p-5 ">
          <ul className="">
            <p className="text-gray-800 font-bold text-3xl pb-6">
              <span>
                <img
                  // src="https://flowbite.com/docs/images/logo.svg"
                  src="/images/si-logo.png"
                  className=" h-20 w-50 object-cover"
                  alt="Student Integration Logo"
                  // width={50}
                />
              </span>
              {/* <span className="text-primary-600">S</span>tudent
              <span className="text-primary-600"> I</span>ntegration */}
            </p>
            <div className="flex gap-6 pb-5 ml-5">
              <Link
                href={"https://www.facebook.com/profile.php?id=100085894975242"}
              >
                {" "}
                <FaFacebookSquare className="text-4xl cursor-pointer text-primary-600" />
              </Link>
              {/* <FaInstagram className="text-4xl cursor-pointer text-pink-400" />
              <FaTwitter className="text-4xl cursor-pointer text-primary-500" /> */}
              <Link
                href={"https://www.linkedin.com/company/student-integration"}
              >
                <FaLinkedin className="text-4xl cursor-pointer text-primary-600" />
              </Link>
              <Link
                href={`https://www.youtube.com/channel/UCFnDjWLDLr8G-G22GTlbOvQ`}
              >
                <FaYoutube className="text-4xl cursor-pointer text-red-600" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Destinations
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              United Kingdom
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Australia
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Canada
            </li> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Site Map</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              <Link href="/destinations"> Explore Destinations</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              <Link href="/universities"> Explore Universities</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              <Link href="/courses"> Explore Courses</Link>
            </li>

            {/* <Link href="/news">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
                Latest News
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">About us</p>
            <Link href={"tel:+9189858 90000"}>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
                Contact : +91 89858 90000
              </li>
            </Link>
            <Link target={"_blank"} href={"mailto:studyabroad@studentint.com"}>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
                Ask a Query
              </li>
            </Link>
            <Link
              target={"_blank"}
              href={"https://goo.gl/maps/1fbJ5FK7xZttX4hj6"}
            >
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer ">
                Find us: H-1070 Solitaire Business Hub,
                <br /> Viman Nagar, Pune
              </li>
            </Link>
            {/* <Link href="/apply">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
                Apply for Universities
              </li>
            </Link> */}
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Videos
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold text-xl">
          © 2022 Student Integration Limited. All rights reserved.{" "}
          <span className="hover:text-primary-600 font-semibold cursor-pointer">
            {" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
