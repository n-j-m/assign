import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import redirect from '../utils/redirect';
import { authenticated } from '../utils/auth';

export default (initStore, mapState, mapDispatch) => ToWrap => {
  return withRedux(initStore, mapState, mapDispatch)(
    class Wrapper extends Component {
      static __withAuth = true;
      static displayName = `WithAuth(${ToWrap.displayName})`;

      static getInitialProps(ctx) {
        if (!authenticated(ctx)) {
          redirect('/login', ctx);
        }
        return !ToWrap.getInitialProps ? {} : ToWrap.getInitialProps(ctx);
      }

      render() {
        return <ToWrap />;
      }
    }
  );
};
