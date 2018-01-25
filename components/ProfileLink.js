import { Component } from 'react';
import { connect } from 'react-redux';

import redirect from '../utils/redirect';
import { logout } from '../redux/actions';
import NavLink from './NavLink';

class ProfileLink extends Component {
  render() {
    const props = this.props;
    return props.user ? (
      <li className="nav-item">
        <a className="nav-link" href="/logout" onClick={this.logout}>
          {props.user.email}
        </a>
      </li>
    ) : (
      <NavLink href="/login">
        <a className="nav-link">Login</a>
      </NavLink>
    );
  }

  logout = e => {
    e.preventDefault();

    this.props.logout();
    redirect('/login');
  };
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(state => ({ user: state.user }), mapDispatchToProps)(
  ProfileLink
);
