import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/themeContext.hook";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Settings from "./pages/Settings";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Dashboard />} path="/"></Route>
          <Route element={<Company />} path="/company"></Route>
          <Route element={<Admin />} path="/admin"></Route>
          <Route element={<Customer />} path="/customer"></Route>
          <Route element={<Settings />} path="/settings"></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
