import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditPage from "./pages/EditPage";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPage";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import apiSlice from "./store/slices/apiSlice";

import 'react-toastify/dist/ReactToastify.css';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "edit",
          errorElement: <ErrorPage />,
          element: <EditPage />
        }

      ]
    },


  ])

  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider >
  );
}

export default App;
