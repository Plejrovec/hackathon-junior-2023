import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Divadla from "./routes/KulturniAkce/Divadla";
import Exkurze from "./routes/KulturniAkce/Exkurze";
import Festivaly from "./routes/KulturniAkce/Festivaly";
import Koncerty from "./routes/KulturniAkce/Koncerty";
import Kurzy from "./routes/KulturniAkce/Kurzy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Divadla",
        element: <Divadla />,
      },
      {
        path: "Koncerty",
        element: <Koncerty />,
      },
      {
        path: "Festivaly",
        element: <Festivaly />,
      },
      {
        path: "Exkurze",
        element: <Exkurze />,
      },
      {
        path: "Kurzy",
        element: <Kurzy />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);