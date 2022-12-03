import "../styles/Carousel.module.css";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
const sanityClient = createClient({
  projectId: "hdjmykqh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

import { createClient } from "next-sanity";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Home({ universities }) {
  // console.log(articles);
  return (
    <>
      <section className="bg-white mt-20 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Matched Universities
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Want help choosing a University?{" "}
              <Link
                href="/contact"
                className="font-light  text-center hover:font-bold transition-all text-blue-500 sm:text-xl dark:text-blue-500"
              >
                Get in touch with our counselors
              </Link>
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {universities.map((university) => (
              <Link href={`/university/${university.slug.current}`}>
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-600 uppercase font-bold text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      {/* <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg> */}
                      University
                    </span>
                    {/* <span className="text-sm">
                    {Math.floor(Math.random() * 31 + 1)} days ago
                  </span> */}
                  </div>
                  <div>
                    <Image
                      src={urlFor(university.logo).url()}
                      width={400}
                      height={400}
                      className="p-3  hover:opacity-50 cursor-pointer hover:rounded-xl"
                    />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{university.name}</a>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {/* <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span> */}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
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
                    </a>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const universities = await sanityClient.fetch(
    `*[_type == "university"] | order(_createdAt asc)`
  );

  return {
    props: {
      universities,
    },
  };
}
