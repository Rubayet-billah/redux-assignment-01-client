import { loadBlog } from "../../actions/blogActions";

const fetchBlog = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://redux-assignment-01-server.vercel.app/blogs"
    );
    const data = await res.json();
    dispatch(loadBlog(data));
  };
};

export default fetchBlog;
