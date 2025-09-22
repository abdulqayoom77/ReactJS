import { useContext } from "react";
import { FormContext } from "../context/form-context";

export default function useForm() {
  return useContext(FormContext);
}
