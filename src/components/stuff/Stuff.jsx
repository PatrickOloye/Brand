import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Stuff = () => {
  return (
    // <section className="bg-center bg-no-repeat bg-[url('/n7.jpeg')] bg-gray-500 bg-blend-multiply mx-11 rounded-full">
    //   <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    //     <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
    //       We invest in the world of potential
    //     </h1>
    //     <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
    //       Here at Flowbite we focus on markets where technology, innovation, and
    //       capital can unlock long-term value and drive economic growth.
    //     </p>
    //     <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
    //       <Link
    //         href="#"
    //         className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    //       >
    //         Get started
    //         <svg
    //           aria-hidden="true"
    //           className="ml-2 -mr-1 w-4 h-4"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </Link>
    //       <Link
    //         href="/"
    //         className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
    //       >
    //         Learn more
    //       </Link>
    //     </div>
    //   </div>
    // </section>

    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl lg:mb-0 lg:w-1/3">
            Our Gallery
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6">
            Our gallery showcases the vibrant and inspiring moments of our
            students' educational journeys. Step into the world of our borrowers
            and witness their transformative experiences as they pursue their
            dreams in universities across the globe. Through captivating
            photographs and heartfelt testimonials, our gallery captures the
            diverse cultures, enriching academic environments, and lifelong
            connections that students have forged during their time abroad.
          </p>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n1.jpeg"
                width={700}
                height={700}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n3.jpeg"
                width={700}
                height={700}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n4.jpeg"
                width={700}
                height={700}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n5.jpeg"
                width={700}
                height={700}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n6.jpeg"
                width={700}
                height={700}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/n7.jpeg"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stuff;
