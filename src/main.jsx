import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Product from "./pages/Product/Product.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.tsx";
import { BlogList } from "./pages/Blog/BlogList.jsx";
import BlogDetail from './pages/Blog/BlogDetail.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Product },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {path: 'blog', Component: BlogList},
      {path: 'blog/detail/:id', Component: BlogDetail}
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
