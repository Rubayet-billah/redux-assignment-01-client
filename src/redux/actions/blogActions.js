import { DELETE_CONTENT, GET_CONTENT } from "./actionTypes/actionTypes";

export const loadBlog = (blog) => {
  return {
    type: GET_CONTENT,
    payload: blog,
  };
};

export const postBlog = (blog) => {
  return {
    type: GET_CONTENT,
    payload: blog,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};
