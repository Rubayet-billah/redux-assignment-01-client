import { deleteBlog } from "../../actions/blogActions";

const deleteBlogFromDb = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.deletedCount) {
      dispatch(deleteBlog(id));
    }
  };
};

export default deleteBlogFromDb;
