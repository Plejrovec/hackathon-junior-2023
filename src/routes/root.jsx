import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router</h1>
          <nav>
            <ul>
              <li>
                <a href={`/divadla`}>Divadla</a>
              </li>
              <li>
                <a href={`/koncerty`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }