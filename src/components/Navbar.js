import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    let {toggleMode,mode}=this.props
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsWorld
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    {" "}
                    Business{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">
                    {" "}
                    Entertainment{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    {" "}
                    Health{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    {" "}
                    Science{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    {" "}
                    Sports{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">
                    {" "}
                    Technology{" "}
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{mode=="primary"?"Dark Mode🌙":"Light Mode☀️"}</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
