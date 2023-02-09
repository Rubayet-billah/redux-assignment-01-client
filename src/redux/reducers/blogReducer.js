import {
  DELETE_BLOG,
  LOAD_BLOG,
  POST_BLOG,
} from "../actions/actionTypes/actionTypes";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    case POST_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    default:
      return state;
  }
};

export default blogReducer;
