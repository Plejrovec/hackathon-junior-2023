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

              <p>Obecné</p>
              <ul>
                <li>
                <a href={``}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="lock"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg> Můj účet</a>
                </li>
                <li>
                  <a href={``}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="lock"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg> Moje akce</a>
                </li>
              </ul>
              
              <a className="back-arrow" href={"/"}>&#129044;</a>
          </aside>
          <main id="detail" class="content">
              <Outlet  />
            
          </main>
        </section>
      </div>
    );
  }