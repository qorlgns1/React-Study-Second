import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useInput(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  console.log(state, dispatch);
  const onChange = (e) => {
    dispatch(e.target);
    console.log("e.target", e.target);
  };
  return [state, onChange];
}
