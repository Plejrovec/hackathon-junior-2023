import Root from "./routes/root";
import {
  createBrowserRouter
} from "react-router-dom";

import Divadlo from "./routes/VsechnyAkce/Divadlo";
import Film from "./routes/VsechnyAkce/Film";
import Hudba from "./routes/VsechnyAkce/Hudba";
import AKCE_TIC_Brno from "./routes/VsechnyAkce/AKCE_TIC_Brno";
import Pro_rodiny from "./routes/VsechnyAkce/Pro_rodiny";
import Veletrhy_vzdelavaci from "./routes/VsechnyAkce/Veletrhy_vzdelavaci";
import Vystava from "./routes/VsechnyAkce/Vystava";
import Nocni_zivot from "./routes/VsechnyAkce/Nocni_zivot";

import TOP_akce from "./routes/VsechnyAkce/TOP_akce";
import Festivaly from "./routes/VsechnyAkce/Festivaly";
import Gastronomicke from "./routes/VsechnyAkce/Gastronomicke";

import Default from "./routes/default";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Default />,
      },
      {
        path: "Divadlo",
        element: <Divadlo />,
      },
      {
        path: "Film",
        element: <Film />,
      },
      {
        path: "Hudba",
        element: <Hudba />,
      },
      {
        path: "AKCE_TIC_Brno",
        element: <AKCE_TIC_Brno />,
      },
      {
        path: "Pro_rodiny",
        element: <Pro_rodiny />,
      },
      {
        path: "Veletrhy_vzdelavaci",
        element: <Veletrhy_vzdelavaci />,
      },
      {
        path: "Vystava",
        element: <Vystava />,
      },
      {
        path: "Nocni_zivot",
        element: <Nocni_zivot />,
      },
      {
        path: "TOP_akce",
        element: <TOP_akce />,
      },
      {
        path: "Festivaly",
        element: <Festivaly />,
      },
      {
        path: "Gastronomicke",
        element: <Gastronomicke />,
      }
    ]
  },
]);

export default router;