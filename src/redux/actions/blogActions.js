import { LOAD_BLOG } from "./actionTypes/actionTypes";

export const loadBlog = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
  };
};