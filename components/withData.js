import { Component } from 'react';

export default ToWrap => {
  // check if already wrapped, no need to wrap it again.
  if (ToWrap.__withData) {
    return ToWrap;
  }

  return class Wrapped extends Component {
    static displayName = `WithData(${ToWrap.displayName})`;
    static __withData = true;

    static getInitialProps(ctx) {
      const props = !ToWrap.getInitialProps ? {} : ToWrap.getInitialProps(ctx);
      return {
        ...props,
        isServer: ctx.isServer,
        store: !ctx.store ? null : ctx.store.getState()
      };
    }

    render() {
      return <ToWrap {...this.props} />;
    }
  };
};
