import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BlogCard from "../Blogs/BlogCard";

const Dashboard = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} location={location} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
