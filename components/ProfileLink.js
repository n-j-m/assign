import { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../redux/actions';
import NavLink from './NavLink';

class ProfileLink extends Component {
  render() {
    const props = this.props;
    return props.user ? (
      <li className="nav-item">
        <a className="nav-link" onClick={_ => props.logout()}>
          {props.user.email}
        </a>
      </li>
    ) : (
      <NavLink href="/login">
        <a className="nav-link">Login</a>
      </NavLink>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(state => ({ user: state.user }), mapDispatchToProps)(
  ProfileLink
);
