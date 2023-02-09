import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import fetchBlog from "../../redux/thunk/blog/fetchBlog";
import BlogCard from "../Blogs/BlogCard";

const Dashboard = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} location={location} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
