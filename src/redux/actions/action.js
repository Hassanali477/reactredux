export const incNumber = (num) => {
  return {
    type: "INC_NUMBER",
    payload: num,
  };
};

export const decNumber = (num) => {
  return {
    type: "DEC_NUMBER",
    payload: num,
  };
};
