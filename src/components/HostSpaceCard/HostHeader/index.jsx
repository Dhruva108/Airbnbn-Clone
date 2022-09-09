import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const HostHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();

    navigate('/');
  };
  return (
    <main className="hostHeader__main-container">
      <section className="hostHeader__image-container">
        <Link to="/HostHome">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662807/images/Logo/Pink_lmr4oj.png" alt="logo" />
        </Link>
      </section>
      <nav className="hostHeader__menu-container">
        <Link to="/Profile">
          <article className="hostHeader__menu__item">
            Profile
          </article>
        </Link>
        <Link to="/PropertyTypeGroup">
          <article className="hostHeader__menu__item">
            Create
          </article>
        </Link>
        <article className="hostHeader__menu__button">
          <button type="button" onClick={handleClick}>
            log-out
          </button>
        </article>
      </nav>
    </main>
  );
};

export default HostHeader;
