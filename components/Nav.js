import NavLink from './NavLink';

export default () =>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <NavLink href="/">
          <a className="nav-link">Home</a>
        </NavLink>
        <NavLink href="/about">
          <a className="nav-link">About</a>
        </NavLink>
      </ul>
      <ul className="navbar-nav navbar-right">
        <NavLink href="/login">
          <a className="nav-link">Login</a>
        </NavLink>
      </ul>
    </div>
  </nav>;
