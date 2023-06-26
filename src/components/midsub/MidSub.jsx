import React from 'react';
import Image from 'next/image';

const MidSub = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="rounded-lg object-cover object-center"
            alt="hero"
            src="/n8.jpeg"
            width={700}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h3 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Invest in Education, Invest in Yourself: Be Future-Ready!
          </h3>
          <p className="mb-8 leading-relaxed">
            Invest in education, and you invest in yourself. By choosing our
            academic loans, you equip yourself with the tools and knowledge
            needed to be future-ready, opening doors to endless possibilities
            and personal fulfillment.
          </p>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default MidSub;
