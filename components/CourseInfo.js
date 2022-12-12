import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import Link from "next/link";

const CourseInfo = ({ course, university }) => {
  console.log(course[0].name);
  return (
    <div className="">
      <h5
        className="ml-2 pl-2 text-3xl lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 font-bold tracking-tight text-gray-900 dark:text-white"
        style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
      >
        {course[0].name} at {university.name}
      </h5>

      <PortableText
        // Pass in block content straight from Sanity.io
        content={course[0].content}
        projectId="hdjmykqh"
        dataset="production"
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h1: (props) => (
            <h1
              className="font-bold ml-2 pl-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20  text-5xl  text-justify text-blue-600  underline"
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="font-bold ml-2 pl-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 text-3xl  text-justify font-mono py-4 underline"
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="font-bold ml-2 pl-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20  text-justify text-2xl py-4 font-serif underline"
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              {...props}
            />
          ),
          h4: (props) => (
            <h4
              className="font-bold ml-2 pl-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 text-justify text-2xl font-serif underline"
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              {...props}
            />
          ),

          ul: ({ children }) => (
            <ul
              className=" list-disc ml-2 pl-2 lg:ml-20 lg:pl-20 lg:px-20 lg:mx-20 xl:pl-20 xl:ml-20 xl:px-20  flex justify-start items-start py-4 flex-col "
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
            >
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="ml-5 list-disc text-lg ">{children}</li>
          ),
          normal: ({ children }) => (
            <p
              className="text-xl ml-2 pl-2 px-4 lg:ml-20 lg:pl-20 lg:px-20 lg:mx-20 lg:p-2 xl:pl-20 xl:ml-20 xl:px-20   text-justify  justify-center"
              style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
            >
              {children}
            </p>
          ),
          marks: ({ children }) => (
            <strong className="text-xl lg:ml-20 lg:pl-20 xl:pl-20 lg:px-20 lg:mx-20 xl:ml-20 xl:px-20  text-justify">
              {children}
            </strong>
          ),

          bullet: ({ children }) => (
            <ul className="mt-xl list-disc lg:px-20 lg:mx-20">{children}</ul>
          ),

          div: ({ children }) => (
            <ul className="flex justify-center lg:ml-20 lg:pl-20 lg:px-20 lg:mx-20 xl:pl-20 xl:ml-20 xl:px-20  items-center">
              {children}
            </ul>
          ),
        }}
      />
    </div>
  );
};

export default CourseInfo;
