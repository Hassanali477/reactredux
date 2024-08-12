const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INC_NUMBER":
      return state + action.payload;
    case "DEC_NUMBER":
      return Math.max(state - action.payload, 0);
    default:
      return state;
  }
};

export default changeTheNumber;
