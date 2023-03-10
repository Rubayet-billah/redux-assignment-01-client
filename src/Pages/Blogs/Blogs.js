import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlog from "../../redux/thunk/blog/fetchBlog";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
