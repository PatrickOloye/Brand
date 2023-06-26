import React from 'react';
// import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mx-12 w-screen rounded border-sky-100 bg-transparent  px-6  py-24">
      <div className="m-auto grid max-w-[600px] px-4 md:max-w-[1480px]  md:grid-cols-2 md:px-0">
        <div className="flex h-full flex-col justify-center">
          <h3 className="text-5xl font-bold md:text-6xl">Plan Your FUTURE</h3>
          <p className="py-6 text-2xl">
            Guiding You Towards Academic Excellence and a Brighter Tomorrow
          </p>
          <p className="pb-2 text-justify">
            We are here to empower you on your educational journey. With our
            academic loan solutions, we provide the financial support you need
            to chart your path to success. Whether you dream of studying at
            prestigious universities, exploring new horizons, or gaining the
            skills for a thriving career, we are dedicated to guiding you every
            step of the way. Our commitment to excellence, personalized support,
            and flexible repayment options ensure that you can focus on your
            education without financial constraints. Embark on a transformative
            experience, open doors to endless opportunities, and create a
            brighter tomorrow.
          </p>
          <div>
            <button className="mb-2 rounded-full bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Learn More
            </button>
            {/* <button className="bg-black text-white border-black hover:shadow-xl">
              Book Your Trip
            </button> */}
          </div>
        </div>

        <Image
          src="/n2.png"
          // src="/m15.jpeg"
          className="order-first  rounded-br-3xl  rounded-tl-3xl md:order-last"
          alt=""
          width={700}
          height={50}
        />
      </div>
    </div>
  );
};

export default Hero;
