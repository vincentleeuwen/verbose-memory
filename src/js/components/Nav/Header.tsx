import { useContext } from 'react';
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';

import logo from './logo_icon.svg';
import { AppContext } from '../../context';

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(AppContext);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        role="navigation"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} height="36px" width="auto" alt="Checkmk" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nobel prizes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Laureates
                </a>
              </li>
            </ul>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic example"
              style={{ marginRight: 10 }}
            >
              <button
                onClick={toggleTheme}
                className={
                  !darkTheme
                    ? 'd-flex justify-content-center align-items-center btn btn-light'
                    : 'd-flex justify-content-center align-items-center btn btn-outline-light'
                }
                type="button"
              >
                <BsFillBrightnessHighFill />
              </button>
              <button
                onClick={toggleTheme}
                className={
                  darkTheme
                    ? 'd-flex justify-content-center align-items-center btn btn-light'
                    : 'd-flex justify-content-center align-items-center btn btn-outline-light'
                }
                type="button"
              >
                <BsFillMoonFill />
              </button>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search laureates"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
