import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";

const sanityClient = createClient({
  projectId: "hdjmykqh",
  dataset: "production",
  apiVersion: "2022-03-25",

  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const UniversityCards = ({ universities }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl underline font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Universities we work with
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {universities.map((university) => (
            <Link
              href={`/universities/${university.slug.current}`}
              className="flex justify-center items-center"
              key={`${university._id}`}
            >
              <Image
                src={urlFor(university.logo).url()}
                width={400}
                height={400}
                className="p-3  hover:opacity-50 cursor-pointer hover:rounded-xl"
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityCards;
