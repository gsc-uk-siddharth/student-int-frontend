import Head from "next/head";
import "../styles/Carousel.module.css";
import CarouselItem from "../components/CarouseItem";
import Cards from "../components/Cards";
import SearchBox from "../components/SearchBox";
import CountryCards from "../components/CountryCards";
import { createClient } from "next-sanity";
import Gbtn from "../components/Gbtn";
import Articles from "../components/Articles";
import UniversityCards from "../components/UniversityCards";
// import { useState } from "react";

import { useState, useEffect, useRef } from "react";

export default function Home({
  courses,
  destinations,
  schools,
  articles,
  universities,
}) {
  const [isDriftLoaded, setIsDriftLoaded] = useState(false);
  return (
    <>
      <CarouselItem />
      <SearchBox
        schools={schools}
        destinations={destinations}
        courses={courses}
      />
      <hr className="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0  dark:bg-gray-700"></hr>
      <div className="m-4 pt-4 text-gray-900 text-3xl text-center tracking-tight font-extrabold underline dark:text-white">
        Unsure what to study
      </div>
      <Cards schools={schools} />
      <hr className="hidden md:block my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <Articles articles={articles} />
      <hr className="hidden md:block my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <div className="m-2 p-2 text-3xl text-center text-gray-900 underline lg:text-4xl tracking-tight font-extrabold  dark:text-white">
        Unsure where to study
      </div>
      <CountryCards destinations={destinations} />
      <hr className="hidden md:block mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-5 dark:bg-gray-700"></hr>
      <UniversityCards universities={universities} />
    </>
  );
}

const client = createClient({
  projectId: "hdjmykqh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function getStaticProps() {
  const courses = await client.fetch(`*[_type == "courses"]`);
  const destinations = await client.fetch(`*[_type == "destination"]`);
  const schools = await client.fetch(`*[_type == "schools"]`);
  const articles = await client.fetch(`*[_type == "blogs"]`);
  const universities = await client.fetch(`*[_type == "university"]`);

  return {
    props: {
      courses,
      destinations,
      schools,
      articles,
      universities,
    },
  };
}

// function useInterval(callback, delay) {
//   const savedCallback = useRef(null);

//   // Remember the latest function.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
