// import React from "react";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   autocomplete: {
//     // Apply this style to the Autocomplete component by default
//     width: 300,
//     margin: "0 auto",
//     padding: theme.spacing(2),

//     // Use a media query to apply a different style
//     // to the Autocomplete component when the screen is narrow
//     [theme.breakpoints.down("sm")]: {
//       width: "100%",
//     },
//   },
// }));

const CourseItem = ({ courses, courseSearch }) => {
  // const classes = useStyles();

  let people = [
    ...courses.map((course) => {
      return course.name;
    }),
  ];
  // here people is courses, did not rename coz code can break :)

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
    courseSearch(newValue);
  };
  return (
    // <div className="px-3 py-3">
    //   <Combobox value={selectedPerson} onChange={setSelectedPerson}>
    //     <div className="relative mt-1">
    //       <div className="relative w-full cursor-default  overflow-hidden rounded-lg bg-white text-gray-900 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm dark:text-gray-900">
    //         <Combobox.Input
    //           onChange={function (event) {
    //             setQuery(event.target.value);
    //             courseSearch(event.target.value);
    //           }}
    //         />

    //         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
    //           <ChevronUpDownIcon
    //             className="h-5 w-5 text-gray-400"
    //             aria-hidden="true"
    //           />
    //         </Combobox.Button>
    //       </div>
    //       <Transition
    //         as={Fragment}
    //         leave="transition ease-in duration-100"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //         afterLeave={() => setQuery("")}
    //       >
    //         <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //           {filteredPeople.length === 0 && query !== "" ? (
    //             <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
    //               Nothing found.
    //             </div>
    //           ) : (
    //             filteredPeople.map((person) => (
    //               <Combobox.Option
    //                 key={person}
    //                 value={person}
    //                 className={({ active, selected }) =>
    //                   `relative cursor-default select-none py-2 pl-10 pr-4 ${
    //                     active ? "bg-primary-600 text-white" : "text-gray-900"
    //                   }`
    //                 }
    //               >
    //                 {({ selectedPerson, active }) => (
    //                   <>
    //                     <span
    //                       className={`block truncate ${
    //                         selectedPerson ? "font-medium" : "font-normal"
    //                       }`}
    //                     >
    //                       {person}
    //                     </span>
    //                     {selectedPerson ? (
    //                       <span
    //                         className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
    //                           active ? "text-white" : "text-teal-600"
    //                         }`}
    //                       >
    //                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
    //                       </span>
    //                     ) : null}
    //                   </>
    //                 )}
    //               </Combobox.Option>
    //             ))
    //           )}
    //         </Combobox.Options>
    //       </Transition>
    //     </div>
    //   </Combobox>
    // </div>

    <div className="px-3 py-3  lg:block">
      <Autocomplete
        id="combo-box-demo"
        options={people}
        sx={{ width: 300, color: "black", background: "white" }}
        // className={classes.autocomplete}
        onChange={handleChange}
        freeSolo="true"
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderInput={(params) => <TextField {...params} label="Course" />}
      />
    </div>
  );
};

// const SearchItem = () => {
//   return MyCombobox();
// };

// const client = createClient({
//   projectId: "hdjmykqh",
//   dataset: "production",
//   apiVersion: "2022-03-25",
//   useCdn: false,
// });

// export async function getStaticProps() {
//   const data = await client.fetch(`*[_type == "courses"].name`);
//   return {
//     props: {
//       data,
//     },
//   };
// }
export default CourseItem;
