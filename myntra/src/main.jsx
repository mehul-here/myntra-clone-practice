import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import {Provider} from "react-redux";
import myntraStore from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/bag", element: <Bag/> },
      { path: "/", element: <Home/> }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode><Provider store={myntraStore}>
    <RouterProvider router={router} /></Provider>
  </StrictMode>
);
