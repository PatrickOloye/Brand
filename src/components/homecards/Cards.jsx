import react from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <section>
      <div className="relative mx-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="m-10 flex flex-col overflow-hidden rounded-lg shadow-lg transition hover:scale-125 hover:duration-700 hover:ease-in-out">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src="/m6.jpeg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-black">
                      Tailored Funding Solutions
                    </p>
                    <p className="mt-3 text-base text-black">
                      We understand that your education journey is unique, and
                      we offer tailored funding solutions to suit your needs.
                      With our academic loans, you can shape your education
                      experience and create a path towards personal and
                      professional success.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="m-10 flex flex-col overflow-hidden rounded-lg shadow-lg transition hover:scale-125 hover:duration-700  hover:ease-in-out">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src="/m5.jpeg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-black">
                      Your Education, Your Way
                    </p>
                    <p className="mt-3 text-base text-black">
                      Education is the key that unlocks doors of opportunity,
                      and we are dedicated to ensuring that key is accessible to
                      all. Our mission is to empower students from diverse
                      backgrounds to pursue their educational dreams, regardless
                      of financial barriers.
                    </p>
                  </Link>
                </div>
               
              </div>
            </div>
            <div className="m-10 flex flex-col overflow-hidden rounded-lg shadow-lg transition hover:scale-125 hover:duration-700  hover:ease-in-out">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src="/m8.jpeg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-black">
                      We Support You!
                    </p>
                    <p className="mt-3 text-base text-black">
                      Dare to dream big, and dare to succeed. We stand by your side, providing unwavering support through our academic loans, empowering you to turn your dreams into a reality filled with achievements.
                    </p>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
