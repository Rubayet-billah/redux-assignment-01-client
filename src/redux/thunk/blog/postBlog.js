import { postBlog } from "../../actions/blogActions";

const postBlogToDb = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://redux-assignment-01-server.vercel.app/blogs",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      console.log(data);
      dispatch(postBlog());
    }
  };
};

export default postBlogToDb;

//{"_id":{"$oid":"63e132f73cefd4fca9800f4f"},"id":{"$numberInt":"1"},"title":"How to create a successful blog","author":"John Doe","publish_date":"2022-12-01","body":"Creating a successful blog requires hard work and dedication. In this post, we'll go over the key elements you need to keep in mind when starting your own blog. From choosing the right niche to promoting your content, we've got you covered. Let's get started!","category":"Blogging","tags":["blogging","success","tips"]}
