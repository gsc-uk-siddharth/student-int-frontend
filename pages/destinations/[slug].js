import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const client = createClient({
  projectId: "hdjmykqh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
const Destinations = ({ destination }) => {
  console.log(destination);
  return (
    <>
      <div className="pt-20 mt-5">
        <Image
          src={urlFor(destination.image).url()}
          width={600}
          height={600}
          className="lg:ml-20 lg:px-20 lg:mx-20"
          alt=""
        />
        <div
          className="text-justify py-4 lg:pl-20 lg:ml-20 lg:px-20 lg:mx-20 underline pl-2 text-4xl font-bold"
          style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
        >
          {destination.name}
        </div>
        <PortableText
          // Pass in block content straight from Sanity.io
          content={destination.content}
          projectId="hdjmykqh"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => (
              <h1
                className="font-bold ml-2 pl-2 py-4lg:pl-20 lg:ml-20   text-5xl text-justify "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-bold p-4 pl-2 py-4 lg:pl-20 lg:ml-20  text-3xl text-justify font-mono  "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-bold  pl-2 py-4 lg:pl-20 lg:ml-20   text-justify text-2xl  font-serif"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-bold pl-2 py-4 lg:pl-20 lg:ml-20  text-justify text-2xl font-serif "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h5: (props) => (
              <h5
                className="font-bold pl-2 py-4 lg:pl-20 lg:ml-20  text-justify text-2xl font-serif "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),

            ul: ({ children }) => (
              <ul
                className=" list-disc ml-2 pl-2 px-2 lg:pl-20 lg:ml-20  flex justify-start items-start py-4 flex-col"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li
                className="ml-5 list-disc text-lg"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </li>
            ),
            normal: ({ children }) => (
              <p
                className="text-xl  px-2 py-2 lg:pl-20 lg:ml-20 lg:px-20 lg:mx-20 lg:text-2xl text-justify  justify-center"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </p>
            ),
            marks: ({ children }) => (
              <strong
                className="text-xl  text-justify"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </strong>
            ),

            bullet: ({ children }) => (
              <ul className="mt-xl list-disc">{children}</ul>
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
        <section className="text-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">
                Found your dream country?
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
      </div>
    </>
  );
  // return (
  //   <>
  //     <PortableText value={blog.content} components={components} />
  //   </>
  // );
};

export default Destinations;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const query = `*[_type == "destination" && slug.current == "${slug}"][0]`;
  const destination = await client.fetch(query);

  return {
    props: {
      destination,
    },
  };
};
