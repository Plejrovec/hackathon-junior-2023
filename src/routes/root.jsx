import { Outlet } from "react-router-dom";
import "../css/root.css"
import nav from "../imgs/navbar.png"
export default function Root() {
    return (
      <div className="container">
        <img src={nav} ></img>
        <section className="main-content">
          <aside  className="sidebar">
            
             <h1>Akce V Brně</h1>
              <p>Kulturni akce</p>
              <ul >
                <li>
                  <a href={`divadla`}>Divadla</a>
                </li>
                <li>
                  <a href={`koncerty`}>Koncerty</a>
                </li>
                <li>
                  <a href={`festivaly`}>Festivaly</a>
                </li>
                <li>
                  <a href={`exkurze`}>Exkurze</a>
                </li>
                <li>
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
              <a className="back-arrow" href={"/"}>&#129044;</a>
          </aside>
          <main id="detail" class="content">
              <Outlet />
          </main>
        </section>
      </div>
    );
  }