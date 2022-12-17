// This slug is specifically made for landing pages

import React from "react";
import { useState } from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import Link from "next/link";


const Course = ({ course }) => {
  // First Name	Last Name	Phone Number	Email Address	City	State	Course interested in	Highest Qualification
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [qualification, setQualification] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      firstName: e.target.floating_first_name.value,
      lastName: e.target.floating_last_name.value,
      email: e.target.floating_email.value,
      phone: e.target.floating_phone.value,
      city: e.target.floating_city.value,
      state: e.target.floating_state.value,
      course: e.target.floating_course.value,
      qualification: e.target.floating_qualification.value,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    console.log(content);

    const status = await response.status;
    if (status === 200) {
      setFormSuccess(true);
    }

  };

  const [loading, setLoading] = useState(false)

  function loadData() {
    setLoading({ loading: true })

    setTimeout(() => {
      setLoading({ loading: false });
    }, 1000);

  }



  return (
    <>



      <section
        style={{
          background: "url('/images/newhero4.png')",
          backgroundSize: "cover",
        }}
        className="mt-10 pt-10 pb-12"
      >
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Apply for {course.title} at
            </h1>
            <img src="/images/uel-my.png" className="w-80 h-40" />
            <p className="max-w-2xl mb-6 font-light text-white pl-2 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We are a careers-first university. We prepare our students for the
              jobs of the future and have been doing this proudly for 124 years.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                className="inline-flex items-center justify-center px-20 py-3 ml-2 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto hover:bg-cyan-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                href="#form"
              >
                👇 Scroll Below to Apply
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/cap1.png" alt="hero image" />
          </div>
        </div>



        {/* <section class="bg-transparent  dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl class="grid max-w-screen-md gap-8 mx-auto text-white sm:grid-cols-3 dark:text-white">
              <div class="flex flex-col items-center justify-center">
                <dd class="font-light text-white dark:text-gray-400">Fees</dd>
                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                  {course.fees}
                </dt>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dd class="font-light text-white dark:text-gray-400">
                  Course Starts
                </dd>
                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                  {course.startDate}
                </dt>
              </div>
            </dl>
          </div>
        </section> */}

        <div className="xl:pl-36 pl-6 lg:text-3xl text-3xl text-white font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          About the Course
        </div>
        <div className="py-4">
          <h5 className=" text-3xl pl-6 xl:pl-36 xl:px-20 font-bold tracking-tight underline text-white dark:text-white">
            {course.name}
          </h5>

          <PortableText
            // Pass in block content straight from Sanity.io
            content={course.content}
            projectId="hdjmykqh"
            dataset="production"
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            serializers={{
              h1: (props) => (
                <h1
                  className="font-bold pl-6 lg:px-20 lg:mx-20 xl:pl-36 xl:px-20  text-5xl  text-justify  text-white"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="font-bold pl-6 px-10 xl:pl-36 xl:px-20 text-3xl  text-justify  py-4 text-white underline"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="font-bold pl-6 xl:pl-36 xl:px-20  text-justify text-2xl py-4 font-serif text-white underline"
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  className="font-bold pl-6  xl:pl-36 xl:px-20 text-justify text-2xl font-serif text-white underline"
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  className="font-bold pl-6  xl:pl-36 xl:px-20 text-justify text-2xl font-serif text-white underline"
                  {...props}
                />
              ),

              ul: ({ children }) => (
                <ul className=" list-disc pl-6  xl:pl-20 xl:ml-20 xl:px-20  flex justify-start items-start py-4 flex-col text-white">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="ml-5 list-disc text-lg text-white ">
                  {children}
                </li>
              ),
              normal: ({ children }) => (
                <p className="text-xl px-6 py-3  lg:mr-20 xl:pl-36 xl:px-20  text-justify text-white font-400 justify-center">
                  {children}
                </p>
              ),
              marks: ({ children }) => (
                <strong className="text-xl  xl:pl-20 xl:ml-20 xl:px-20  text-justify">
                  {children}
                </strong>
              ),

              bullet: ({ children }) => (
                <ul className="mt-xl list-disc">{children}</ul>
              ),

              div: ({ children }) => (
                <ul className="flex justify-center xl:pl-20 xl:ml-20 xl:px-20  items-center">
                  {children}
                </ul>
              ),
            }}
          />
          <Link
            href={`${course.brochureUrl}?dl=course_brochure.pdf`}
            className="inline-flex items-center justify-center px-20  text-gray-900 lg:px-6 xl:px-24 text-bold ml-6 py-3 xl:ml-36 lg:text-2xl text-sm lg:font-light text-center  border border-gray-200 rounded-lg sm:w-auto hover:bg-cyan-900 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Download Brochure
          </Link>
        </div>

        <div className="max-w-screen-xl w-50 px-4  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 ">
          <form id="form" onSubmit={handleSubmit}>
            <h1 className="max-w-2xl mb-4 py-4 text-3xl text-white font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">
              Apply at your dream university
            </h1>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"

                  onChange={(e) => setFirstName(e.target.value)}
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  // value={floating_last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  pattern="[1-9]{1}[0-9]{9}"
                  name="floating_phone"
                  onChange={(e) => setPhone(e.target.value)}
                  // value={floating_phone}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  onChange={(e) => setEmail(e.target.value)}
                  // value={floating_email}
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_city"
                  onChange={(e) => setCity(e.target.value)}
                  // value={floating_city}
                  id="floating_city"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_city"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_state"
                  onChange={(e) => setState(e.target.value)}
                  // value={floating_state}
                  id="floating_state"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_state"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  State
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_course"
                  onChange={(e) => setStudentCourse(e.target.value)}
                  // value={floating_course}
                  id="floating_course"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_course"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Which Course are you interested in?
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_qualification"
                  onChange={(e) => setQualification(e.target.value)}
                  // value={floating_qualification}
                  id="floating_qualification"
                  className="block py-2.5 px-0 w-full text-sm lg:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_qualification"
                  className="peer-focus:font-medium absolute text-sm lg:text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  What is your highest qualification?
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={loadData}
              className="inline-flex items-center justify-center text-gray-900 w-full px-6 py-3 font-bold lg:text-2xl text-sm lg:font-light text-center  border border-gray-200 rounded-lg sm:w-auto hover:bg-cyan-900 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Submit

            </button>
            {formSuccess && <h1 className="max-w-2xl mb-4 py-4 text-2xl text-white font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">
              Form Submitted Successfully.
            </h1>}
          </form>
        </div>
      </section>
    </>
  );

};

export default Course;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const client = createClient({
    projectId: "hdjmykqh",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  const query = `*[_type == "pages" && slug.current == "master-in-business-administration"][0]
  {
    ...,
    "brochureUrl": brochure.asset->url
  }
  `;
  const course = await client.fetch(query);

  return {
    props: {
      course,
    },
  };
};


