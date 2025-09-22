  import { createContext, useReducer } from "react";

  export const FormContext = createContext();

  const initialState = {
    step: 1,
    data: { name: "", email: "", password: "" },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "NEXT":
        return { ...state, step: state.step + 1 };
      case "BACK":
        return { ...state, step: state.step - 1 };
      case "UPDATE":
        return { ...state, data: { ...state.data, ...action.payload } };
      default:
        return state;
    }
  };

  const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <FormContext.Provider value={{ state, dispatch }}>
        {children}
      </FormContext.Provider>
    );
  };

  export default FormProvider;