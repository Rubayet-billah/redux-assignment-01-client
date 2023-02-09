import { deleteBlog } from "../../actions/blogActions";

const deleteBlogFromDb = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://redux-assignment-01-server.vercel.app/blogs/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (data.deletedCount) {
      dispatch(deleteBlog(id));
    }
  };
};

export default deleteBlogFromDb;
