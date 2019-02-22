const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, Object({}, action.course)];

    default:
      return state;
  }
};

export default courseReducer;
