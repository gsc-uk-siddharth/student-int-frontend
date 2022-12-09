import "../styles/Carousel.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  // console.log(articles);
  return (
    <>
      <section className="bg-white mt-20 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800  dark:text-white">
            Get connected with <span className="underline">SI experts</span>{" "}
            today!
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Get in touch with us for free guidance on studying abroad. Our study
            abroad experts are ready to answer all your queries related to
            overseas education. Please write to us at{" "}
            <Link href={"mailto:studyabroad@studentint.com"}>
              <span className="text-primary-600">
                {" "}
                studyabroad@studentint.com
              </span>
            </Link>{" "}
            or call us at{" "}
            <span className="text-primary-600">
              {" "}
              <Link href={"tel:918985890000"}> +91 8985890000</Link>{" "}
            </span>
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter name"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter mail"
                required
              />
            </div>
            <div>
              <label
                htmlFor="course"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Which course are you interested in?
              </label>
              <input
                type="text"
                id="course"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter course name"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="qualification"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                What is your highest qualification?
              </label>
              <input
                type="text"
                id="qualification"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your highest qualification"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your current location"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="location"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your current location"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone number
              </label>
              <input
                type="text"
                id="qualification"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your phone number"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
          {/* <h2 className="mb-4 mt-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Social media channels
          </h2>
          <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            You can also find us across our social media channels, listed in the
            footer of the site. Follow us to keep updated or send us a message.
            We love to hear from you!
          </p>
          <div className="flex gap-6  align-center justify-center">
            <Link
              href={"https://www.facebook.com/profile.php?id=100085894975242"}
            >
              {" "}
              <FaFacebookSquare className="text-5xl cursor-pointer text-primary-600" />
            </Link>
            <FaInstagram className="text-5xl cursor-pointer text-pink-400" />
            <FaTwitter className="text-5xl cursor-pointer text-blue-500" />
            <Link href={"https://www.linkedin.com/company/student-integration"}>
              <FaLinkedin className="text-5xl cursor-pointer text-primary-600" />
            </Link>
            <FaYoutube className="text-5xl cursor-pointer text-red-600" />
          </div> */}
        </div>
      </section>
    </>
  );
}
