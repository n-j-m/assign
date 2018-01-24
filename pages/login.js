import { Component } from 'react';
import Layout from '../components/Layout';
import withRedux from 'next-redux-wrapper';
import redirect from '../utils/redirect';
import { bindActionCreators } from 'redux';
import { createLoginAction } from '../redux/actions';
import { createApi } from '../utils/api';
import { initStore } from '../redux/store';

class Login extends Component {
  componentWillReceiveProps(newProps) {
    if (!this.props.user && newProps.user) {
      redirect('/');
    }
  }

  render() {
    const props = this.props;
    return (
      <Layout>
        <style jsx>{`
          .signin-container {
            height: 100%;
            width: 330px;
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            -ms-flex-align: center;
            -ms-flex-pack: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            padding-top: 40px;
            padding-bottom: 40px;
            margin: 0 auto;
          }
          .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
          }
          .form-signin .checkbox {
            font-weight: 400;
          }
          .form-signin .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
          }
          .form-signin .form-control:focus {
            z-index: 2;
          }
          .form-signin input[type='email'] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
          .form-signin input[type='password'] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
        `}</style>
        <div className="text-center signin-container">
          <form className="form-signin">
            <img
              className="mb-4"
              src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              type="button"
              className="btn btn-lg btn-primary btn-block"
              onClick={_ => props.login({})}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        </div>
        <pre>{JSON.stringify(props)}</pre>
      </Layout>
    );
  }
}

const api = createApi(
  () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            json: () => ({ email: 'dummy@example.com' })
          }),
        1500
      )
    )
);

const loginAction = createLoginAction(api);

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginAction, dispatch)
});

export default withRedux(initStore, state => state, mapDispatchToProps)(Login);
