import { DELETE_BLOG, LOAD_BLOG } from "./actionTypes/actionTypes";

export const loadBlog = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
  };
};

export const postBlog = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
