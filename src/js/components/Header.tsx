

const Header = () =>  <header>
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
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search laureates" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</header>

export default Header;