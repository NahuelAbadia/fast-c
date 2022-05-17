const initialState = {
  toggle: false,
  toggleRightDrawer: false,
};

function topBarReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return {
        ...state,
        toggle: !state.toggle,
      };
    case "TOGGLE_RIGHT_DRAWER":
      return {
        ...state,
        toggleRightDrawer: !state.toggleRightDrawer,
      };
    default:
      return state;
  }
}

export default topBarReducer;
