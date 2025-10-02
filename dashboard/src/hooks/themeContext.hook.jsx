import { useContext } from "react";
import { ThemeContext } from "../context/theme-provider";
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}