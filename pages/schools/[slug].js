import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import Link from "next/link";

const Schools = ({ school }) => {
  return (
    <>
      <div className="pt-20 mt-20 ">
        <h5
          className="mb-2 ml-4  text-2xl md:text-3xl lg:text-gray-900 lg:pl-20 lg:ml-20 text-justify font-bold tracking-tight text-gray-900 dark:lg:text-white  dark:text-white underline "
          style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
        >
          {school.name}
        </h5>
        <PortableText
          // Pass in block content straight from Sanity.io
          content={school.content}
          projectId="hdjmykqh"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => (
              <h1
                className="font-bold  ml-4 pl-4 lg:pl-20 lg:ml-20   text-xl text-justify text-blue-600"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-bold ml-4  text-xl lg:pl-20 lg:ml-20  text-justify font-mono   "
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-bold ml-4lg:pl-20 lg:ml-20   text-justify text-2xl py-4 font-serif "
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-bold ml-4 lg:pl-20 lg:ml-20  text-justify text-2xl font-serif  "
                {...props}
              />
            ),
            h5: (props) => (
              <h5
                className="font-bold px-4 lg:pl-20 lg:ml-202xl:pl-96  text-justify text-2xl font-serif  "
                {...props}
              />
            ),

            ul: ({ children }) => (
              <ul
                className=" list-disc ml-4 pl-4 lg:pl-20lg:ml-20 lg:px-20 lg:mx-20 flex justify-start items-start py-4 flex-col"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li
                className=" list-disc text-lg "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </li>
            ),
            normal: ({ children }) => (
              <p
                className="text-xl px-4 py-2 lg:pl-20 lg:ml-20 lg:px-20 lg:mx-20 lg:text-2xl text-justify  justify-center"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </p>
            ),
            marks: ({ children }) => (
              <strong className="text-xl px-4  text-justify text-primary-700">
                {children}
              </strong>
            ),

            bullet: ({ children }) => (
              <ul
                className="mt-xl list-disc "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),

            div: ({ children }) => (
              <ul
                className="flex justify-center items-center"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),
          }}
        />
      </div>
      <section className="text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">
              Looks Nice?
            </h2>
            <Link href={"https://notionforms.io/forms/student-integration"}>
              <button className="relative md:text-2xl inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  APPLY NOW ↗️
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
  // return (
  //   <>
  //     <PortableText value={blog.content} components={components} />
  //   </>
  // );
};

export default Schools;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const client = createClient({
    projectId: "hdjmykqh",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  const query = `*[_type == "schools" && slug.current == "${slug}"][0]`;
  const school = await client.fetch(query);

  return {
    props: {
      school,
    },
  };
};
