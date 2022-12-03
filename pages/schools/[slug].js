import React from "react";
import PortableText from "react-portable-text";
// import { PortableText } from "@portabletext/react";
import { createClient } from "next-sanity";

// // `components` object you'll pass to PortableText
// const components = {
//   block: {
//     // Ex. 1: customizing common block types
//     h1: ({ children }) => (
//       <h1 className="pt-20 py-10 mt-20 font-bold text-5xl">{children}</h1>
//     ),
//     p: ({ children }) => <p className="p-2 text-xl">{children}</p>,
//     blockquote: ({ children }) => (
//       <blockquote className="border-l-purple-500">{children}</blockquote>
//     ),
//     image: ({ value }) => <img src={value.imageUrl} />,
//     callToAction: ({ value, isInline }) =>
//       isInline ? (
//         <a href={value.url}>{value.text}</a>
//       ) : (
//         <div className="callToAction">{value.text}</div>
//       ),

//     // Ex. 2: rendering custom styles
//     customHeading: ({ children }) => (
//       <h2 className="text-lg text-primary text-purple-700">{children}</h2>
//     ),
//   },
// };

const Schools = ({ school }) => {
  return (
    <>
      <div className="pt-20 mt-20">
        <h5 className="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                className="font-bold text-5xl text-center text-blue-600"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-bold text-3xl text-center font-mono underline py-4"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-bold text-center text-2xl py-4 font-serif"
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-bold text-center text-2xl font-serif"
                {...props}
              />
            ),

            ul: ({ children }) => (
              <ul className=" list-disc flex justify-center items-center py-4 flex-col px-20 ml-20 mx-20">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className=" list-disc">{children}</li>,
            normal: ({ children }) => (
              <p className="text-xl p-4 px-20 mx-20 py-2 text-center  justify-center">
                {children}
              </p>
            ),
            marks: ({ children }) => (
              <strong className="text-xl text-center">{children}</strong>
            ),

            bullet: ({ children }) => (
              <ul className="mt-xl list-disc">{children}</ul>
            ),

            div: ({ children }) => (
              <ul className="flex justify-center items-center">{children}</ul>
            ),
          }}
        />
      </div>
    </>
  );
  // return (
  //   <>
  //     <PortableText value={blog.content} components={components} />
  //   </>
  // );
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

  const query = `*[_type == "schools" && slug.current == "${slug}"][0]`;
  const school = await client.fetch(query);

  return {
    props: {
      school,
    },
  };
};
