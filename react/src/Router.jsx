import Root from "./routes/root";
import {
  createBrowserRouter
} from "react-router-dom";

import Divadla from "./routes/KulturniAkce/Divadla";
import Exkurze from "./routes/KulturniAkce/Exkurze";
import Festivaly from "./routes/KulturniAkce/Festivaly";
import Koncerty from "./routes/KulturniAkce/Koncerty";
import Kurzy from "./routes/KulturniAkce/Kurzy";

import Hry from "./routes/SpolecenskeAkce/Hry";
import Ochutnavky from "./routes/SpolecenskeAkce/Ochutnavky";
import Party from "./routes/SpolecenskeAkce/Party";

import Expedice from "./routes/TuristickeAkce/Expedice";
import PesiVylety from "./routes/TuristickeAkce/PesiVylety";
import Prochazky from "./routes/TuristickeAkce/Prochazky";
import VysokohorskaTuristika from "./routes/TuristickeAkce/VysokohorskaTuristika";

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
      },
      {
        path: "Hry",
        element: <Hry />,
      },
      {
        path: "Ochutnavky",
        element: <Ochutnavky />,
      },
      {
        path: "Party",
        element: <Party />,
      },
      {
        path: "Expedice",
        element: <Expedice />,
      },
      {
        path: "PesiVylety",
        element: <PesiVylety />,
      },
      {
        path: "Prochazky",
        element: <Prochazky />,
      },
      {
        path: "VysokohorskaTuristika",
        element: <VysokohorskaTuristika />,
      }
    ]
  },
]);

export default router;