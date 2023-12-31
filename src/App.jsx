import "./App.css";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
