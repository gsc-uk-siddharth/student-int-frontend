import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanityClient";
import Link from "next/link";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}

const CountryCards = ({ destinations }) => {
  return (
    <div className="main">
      <div className="country-images flex flex-direction:column">
        <div className="image-container p-3 flex flex-col xl:flex-row">
          {/* <Image
            // layout="responsive"
            src={urlFor(destinations.image).width(200).url()}
            width={400}
            height={400}
            alt=""
          /> */}

          {destinations.map((destination) => (
            <Link
              href={`/destinations/${destination.slug.current}`}
              key={destination._id}
            >
              <Image
                src={urlFor(destination.image).url()}
                width={400}
                height={400}
                className=""
                alt=""
              />
              <div className="font-bold text-center text-2xl">
                {destination.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCards;
