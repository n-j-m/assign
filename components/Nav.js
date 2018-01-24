import { Component } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import ProfileLink from './ProfileLink';

class Nav extends Component {
  constructor(props, context) {
    console.log('nav ctor:', props, context);
    super(props, context);
  }
  render() {
    const props = this.props;

    const spinnerCls =
      'la-ball-clip-rotate la-sm' + (!props.fetching ? ' invisible' : '');

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          <div className={spinnerCls} style={{ display: 'inline' }}>
            <div />
          </div>
          {' {Assignments}'}
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
            <ProfileLink user={props.user} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(state => state)(Nav);
