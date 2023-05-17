import { Outlet } from "react-router-dom";
import "../css/root.css"
import nav from "../imgs/navbar.png"
import foot from "../imgs/footer.png"
export default function Root() {
    return (
      <div className="main">
        <img src={nav} ></img>
        <section className="main-content">
          <aside  className="sidebar">
            
             <h2>Akce v JMK</h2>
              <ul>
                <li>
                  <a href={`/`}>Všechny akce</a>
                </li>
                <li>
                  <a href={`divadlo`}>Divadlo</a>
                </li>
                <li>
                  <a href={`film`}>Film</a>
                </li>
                <li>
                  <a href={`hudba`}>Hudba</a>
                </li>
                <li>
                  <a href={`akce_tic_brno`}>Akce TIC Brno</a>
                </li>
                <li>
                  <a href={`pro_rodiny`}>Pro rodiny</a>
                </li>
                <li>
                  <a href={`veletrhy_a_vzdelavaci`}>Veletrhy a vzdělávací akce</a>
                </li>
                <li>
                  <a href={`vystava`}>Výstava</a>
                </li>
                <li>
                  <a href={`nocni_zivot`}>Noční život</a>
                </li>
                <li>
                  <a href={`top_akce`}>TOP akce</a>
                </li>
                <li>
                  <a href={`festivaly`}>Festivaly</a>
                </li>
                <li>
                  <a href={`Gastronomicke`}>Gastronomické akce</a>
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
          <main id="detail" className="content">
              <Outlet  />
            
          </main> 
        </section>
        <hr/>
        <img src={foot} ></img>
      </div>
    );
  }