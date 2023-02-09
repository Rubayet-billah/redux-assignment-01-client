import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className=" py-2 lg:py-0">
              <h2 className="text-6xl tracking-tighter font-bold">
                Read Latest Blogs
              </h2>
              <p className="text-2xl max-w-3xl mt-10">
                We focus on industry leading platforms so that you can be
                prepared for your next skill. Then we teach all we can about
                them.
              </p>
            </div>
            <a
              href="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
