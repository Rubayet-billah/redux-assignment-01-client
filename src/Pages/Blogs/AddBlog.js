import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();

  const handleAddBlog = (data) => {
    const blogObject = {
      ...data,
      date: new Date(),
    };
    console.log(blogObject);
  };

  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(handleAddBlog)}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="authorName" className="text-sm">
                  Author
                </label>
                <input
                  id="authorName"
                  type="text"
                  {...register("authorName")}
                  placeholder="Author name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="blogTitle" className="text-sm">
                  Blog Title
                </label>
                <input
                  id="blogTitle"
                  type="text"
                  {...register("blogTitle")}
                  placeholder="Blog title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="blogDescription" className="text-sm">
                  Blog Description
                </label>
                <textarea
                  id="blogDescription"
                  placeholder=""
                  {...register("blogDescription")}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="blogDescription" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />

                  <input
                    type="submit"
                    className="px-4 py-2 border rounded-md dark:border-gray-100"
                    value="Submit"
                  />
                  {/* <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-100"
                  >
                    Change
                  </button> */}
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
