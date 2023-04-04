import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="todo" element={<TodoPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
