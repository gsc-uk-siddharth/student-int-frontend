import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import CourseInfo from "../../components/CourseInfo";

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
const Post = ({ university, course }) => {
  console.log(university, course);
  return (
    <>
      <div className=" mt-20">
        {/* <div className="text-justify pl-2  text-3xl py-2 font-bold">
          {university.name}
        </div> */}
        <Image
          src={urlFor(university.logo).url()}
          width={400}
          height={400}
          className=" hover:rounded-xl py-6 lg:ml-20 lg:pl-20"
          alt=""
        />
        <CourseInfo course={course} university={university} />

        <div className="text-center lg:text-justify lg:ml-20 lg:pl-20 underline text-4xl text-primary-400 py-2 font-bold">
          {university.name}
        </div>
        <PortableText
          // Pass in block content straight from Sanity.io
          content={university.content}
          projectId="hdjmykqh"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => (
              <h1
                className="font-bold ml-2 pl-2 lg:ml-20 lg:pl-20  py-4 text-5xl text-justify "
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-bold p-4 pl-2 lg:ml-20 lg:pl-20  py-4 text-3xl text-justify   "
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-bold  pl-2 py-4 lg:ml-20 lg:pl-20 text-justify text-2xl  font-serif"
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-bold pl-2 py-4 lg:ml-20 lg:pl-20 text-justify text-2xl font-serif "
                {...props}
              />
            ),
            h5: (props) => (
              <h5
                className="font-bold pl-2 py-4 lg:ml-20 lg:pl-20 text-justify text-2xl font-serif "
                {...props}
              />
            ),

            ul: ({ children }) => (
              <ul className=" list-disc ml-2 pl-2 px-2 lg:ml-20 lg:pl-20 flex justify-start items-start py-4 flex-col">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="ml-5 list-disc text-lg">{children}</li>
            ),
            normal: ({ children }) => (
              <p className="text-xl  px-2 py-2 text-justify  justify-center lg:px-20 lg:mx-20 ">
                {children}
              </p>
            ),
            marks: ({ children }) => (
              <strong className="text-xl  text-justify">{children}</strong>
            ),

            bullet: ({ children }) => (
              <ul className="mt-xl list-disc">{children}</ul>
            ),

            div: ({ children }) => (
              <ul className="flex justify-center items-center">{children}</ul>
            ),
          }}
        />
        <section className="text-white ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight lg:text-gray-900 dark:text-white dark:xl:text-white">
                Feels Good?
              </h2>
              <Link href={"https://notionforms.io/forms/student-integration"}>
                <button className="relative md:text-2xl inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white dark:xl:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 dark:text-white rounded-md group-hover:bg-opacity-0">
                    Lets Connect ↗️
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

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const { courseName } = context.query;

  const query = `*[_type == "university" && slug.current == "${slug}"][0]`;
  const university = await client.fetch(query);

  const courseQuery = `*[_type == "courses" && name match "${courseName}"]`;

  const course = await client.fetch(courseQuery);

  return {
    props: {
      university,
      course,
    },
  };
};
