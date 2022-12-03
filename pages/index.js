import Head from "next/head";
import "../styles/Carousel.module.css";
import CarouselItem from "../components/CarouseItem";
import Cards from "../components/Cards";
import SearchBox from "../components/SearchBox";
import CountryCards from "../components/CountryCards";
import { createClient } from "next-sanity";
import Gbtn from "../components/Gbtn";
import Articles from "../components/Articles";

export default function Home({ courses, destinations, schools, articles }) {
  return (
    <>
      <Head>
        <div className="main text-red-500"></div>
        <Gbtn />
      </Head>
      <CarouselItem />
      <SearchBox
        schools={schools}
        destinations={destinations}
        courses={courses}
      />
      <hr class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <div className="mb-4 text-3xl underline lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Unsure what to study
      </div>
      <Cards schools={schools} />
      <hr class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <Articles articles={articles} />
      <hr class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <div className="mb-4 text-3xl underline lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Unsure where to study
      </div>
      <CountryCards destinations={destinations} />
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

  return {
    props: {
      courses,
      destinations,
      schools,
      articles,
    },
  };
}
