import React from "react";
import Link from "next/link";
import { createClient } from "next-sanity";

const Cards = ({ schools }) => {
  schools = schools.slice(0, 6);
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {schools.map((school) => (
          <div
            key={`${school._id}`}
            className="max-w-sm m-1.5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/schools/${school?.slug?.current}`}>
              <div className="p-4">
                {" "}
                <span className="bg-primary-600 uppercase font-bold text-white text-xs  inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  {/* <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg> */}
                  School
                </span>
              </div>
              <div className="px-5">
                <Link href={`/schools/${school?.slug?.current}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {school.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {school.description}
                </p>
                {/* <h5 className="font-bold">Courses:</h5> */}
                <ul>
                  <li></li>
                </ul>
                <Link
                  href={`/schools/${school?.slug?.current}`}

                  className="inline-flex items-center py-2 my-2 mb-4 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <p className="font-light m-2 text-2xl hover:font-bold transition-all lg:text-2xl text-blue-500 text-center sm:text-xl ">
        <Link href="/schools"> BROWSE ALL SCHOOLS</Link>
      </p>
    </div>
  );
};

export default Cards;
