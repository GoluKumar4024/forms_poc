import contextCreator from "../cotexts/contextCreator";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `Title is ${state.length + 1}` }];
    case "delete_blogPost":
      return state.filter((item) => item.id !== action.payloadd);
    default:
      return state;
  }
};

const addBlogPost = (dispath) => {
  return () => dispath({ type: "add_blogPost" });
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogPost", payload: id });
};

// This is where the initial state of the component is decided whose change causes the whole
// component to re-render.
export const { Context, Provider } = contextCreator(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);

// export { Context, Provider };
