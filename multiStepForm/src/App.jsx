import React from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/step2";
import Step3 from "./components/Step3";
import FormProvider from "./context/form-context";
import useForm from "./hooks/useForm";

const App = () => {
  const { state } = useForm();

  return (
    <div>
      <h2>Step : {state.step}</h2>
      {state.step === 1 && <Step1 />}
      {state.step === 2 && <Step2 />}
      {state.step === 3 && <Step3 />}
    </div>
  );
};

export default App;
