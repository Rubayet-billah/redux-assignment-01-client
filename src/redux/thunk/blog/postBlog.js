import { postBlog } from "../../actions/blogActions";

const postBlogToDb = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    if (data.acknowledged) {
      console.log(data);
      dispatch(postBlog());
    }
  };
};

export default postBlogToDb;
