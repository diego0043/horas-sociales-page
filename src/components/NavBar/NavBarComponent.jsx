import { Link } from 'react-router-dom';
import img from '../../assets/book-stack.png';

export const NavBarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='icon-brand' src={img} alt="" />
            <span className='ms-2 title-brand'>Cuarto Grado</span>
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
          <div
            className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0"
            id="navbarSupportedContent"
          >
              <ul className="d-none d-md-flex d-lg-flex d-xl-flex navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <span className='item-nav'>Inicio</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/juegos">
                  <span className='item-nav'>Juegos</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/juegos">
                  <span className='item-nav'>Material</span>
                  </Link>
                </li>
              </ul>
              <ul className="d-block d-md-none d-lg-none d-xl-none navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/juegos">
                    Juegos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/juegos">
                    Material
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
