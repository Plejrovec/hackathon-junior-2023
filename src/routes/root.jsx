import { Outlet } from "react-router-dom";
import "../css/root.css"
export default function Root() {
    return (
      <div  class="container">
        <div id="sidebar" class="sidemenu">
          <h1>React Router</h1>
          <nav>
            <p>Kulturni akce</p>
            <ul >
              <li class="links">
                <a href={`divadla`}>Divadla</a>
              </li>
              <li class="links">
                <a href={`koncerty`}>Koncerty</a>
              </li>
              <li class="links">
                <a href={`festivaly`}>Festivaly</a>
              </li>
              <li class="links">
                <a href={`exkurze`}>Exkurze</a>
              </li>
              <li class="links">
                <a href={`kurzy`}>Kurzy</a>
              </li>
            </ul>

            <p>Spolecenske akce</p>
            <ul>
              <li>
                <a href={`ochutnavky`}>Ochutnavky</a>
              </li>
              <li>
                <a href={`hry`}>Hry</a>
              </li>
              <li>
                <a href={`party`}>Party</a>
              </li>
            </ul>

            <p>Turisticke akce</p>
            <ul>
              <li>
                <a href={`pesiVylety`}>Pesi vylety</a>
              </li>
              <li>
                <a href={`expedice`}>Expedice</a>
              </li>
              <li>
                <a href={`prochazky`}>Prochazky</a>
              </li>
              <li>
                <a href={`vysokohorskaTuristika`}>Vysokohorska turistika</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" class="tab">
            <Outlet />
        </div>
      </div>
    );
  }