import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Stuff = () => {
  return (
    

    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl lg:mb-0 lg:w-1/3">
            Our Gallery
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6">
            Our gallery showcases the vibrant and inspiring moments of the student educational journeys. Step into the world of our borrowers
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
