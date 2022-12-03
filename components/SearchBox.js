import CourseItem from "./CourseItem";
import DestinationItem from "./DestinationItem";
import SchoolItem from "./SchoolItem";
import React from "react";
import { useRouter } from "next/router";

// function handleSearch(school, destination, course) {
//   console.log(school, destination, course);
// }
let school = "",
  destination = "",
  course = "";
function schoolSearch(args) {
  // console.log(args);
  school = args;
}
function courseSearch(args) {
  // console.log(args);
  course = args;
}
function destinationSearch(args) {
  // console.log(args);

  destination = args;
}

const SearchBox = ({ schools, destinations, courses }) => {
  const router = useRouter();

  return (
    <div className="py-4  grid md:grid-rows-1 text-center">
      <span className="xl:flex flex-row">
        <SchoolItem schools={schools} schoolSearch={schoolSearch} />
        <DestinationItem
          destinations={destinations}
          destinationSearch={destinationSearch}
        />
        <CourseItem courses={courses} courseSearch={courseSearch} />
      </span>
      <span>
        <button
          type="button"
          // onClick={() => router.push(`/search?school=${school}&destination=${destination}&course=${course}`)}
          onClick={function () {
            console.log(school, " | ", destination, " | ", course);
            if (school != "" && destination != "" && course != "") {
              router.push(`/search`);
              // router.push(
              //   `/search?school=${school}&destination=${destination}&course=${course}`
              // );
            }
          }}
          class="sm:my-2 h-12 px-10 mx-2 md:my-3 text-lg text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Search
        </button>
      </span>
    </div>
  );
};

export default SearchBox;
