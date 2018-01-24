import Router from 'next/router';

export default (path, ctx) => {
  if (ctx && ctx.isServer) {
    ctx.res.statusCode = 301;
    ctx.res.setHeader('Location', path);
  } else {
    Router.replace(path);
  }
};
