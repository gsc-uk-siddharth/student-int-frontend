import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";

const Post = ({ blog }) => {
  return (
    <>
      <div className="pt-20 mt-10">
        <PortableText
          // Pass in block content straight from Sanity.io
          content={blog.content}
          projectId="hdjmykqh"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => (
              <h1
                className="font-bold py-4 px-4 pl-1 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 underline  text-3xl text-justify  "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-bold p-2 pl-2 px-2 lg:ml-20 lg:pl-20  xl:pl-20 xl:ml-20 xl:px-20 underline  py-4 text-3xl text-justify font-mono  "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-bold  pl-2 py-2 px-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20  underline  text-justify text-2xl  font-serif"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-bold pl-2 py-2 px-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 underline  text-justify text-2xl font-serif "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),
            h5: (props) => (
              <h5
                className="font-bold pl-2 py-2 px-2 lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20 underline  text-justify text-2xl font-serif "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
                {...props}
              />
            ),

            ul: ({ children }) => (
              <ul
                className=" list-disc pl-2 px-2 flex lg:ml-20 lg:pl-20 xl:pl-20 xl:ml-20 xl:px-20  lg:px-20 lg:text-2xl justify-start items-start py-2 flex-col"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li
                className="ml-5 list-disc text-lg lg:text-2xl"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </li>
            ),
            normal: ({ children }) => (
              <p
                className="text-xl px-2 py-2 text-justify lg:pl-10 lg:ml-20 lg:px-20 lg:mx-20 lg:text-2xl xl:pl-20 xl:ml-20 xl:px-20 xl:p-4 justify-center"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong
                className="text-3xl text-justify underline"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </strong>
            ),

            bullet: ({ children }) => (
              <ul
                className="mt-xl list-disc"
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),

            div: ({ children }) => (
              <ul
                className="flex justify-center items-center "
                style={{ fontFamily: `Roboto Slab`, fontWeight: `400` }}
              >
                {children}
              </ul>
            ),
          }}
        />
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const client = createClient({
    projectId: "hdjmykqh",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  const query = `*[_type == "blogs" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);

  return {
    props: {
      blog,
    },
  };
};
