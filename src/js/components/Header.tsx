import { useContext } from 'react';
import { AppContext, ContextType, themes } from '../context';

const Header = () => {
    const { theme, setTheme } = useContext(AppContext) as ContextType;

    console.log('hahaha');
    console.log(theme);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="../../../assets/images/logo_icon.svg" height="36px" width="auto" alt="Checkmk" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nobel prizes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Laureates</a>
                            </li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 10 }}>
                            <button onClick={() => setTheme(themes.light)} className={theme === themes.light ? 'btn btn-light' : 'btn btn-outline-light'} type="button">L</button>
                            <button onClick={() => setTheme(themes.dark)} className={theme === themes.dark ? 'btn btn-light' : 'btn btn-outline-light'} type="button">D</button>
                            
                        </div>
                        <form className="d-flex" role="search">
                            
                            <input className="form-control me-2" type="search" placeholder="Search laureates" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;