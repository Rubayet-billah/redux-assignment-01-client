import { loadBlog } from "../../actions/blogActions";

const fetchBlog = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    dispatch(loadBlog(data));
  };
};

export default fetchBlog;
