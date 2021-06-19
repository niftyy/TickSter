import 'bootstrap/dist/css/bootstrap.css';

// next js wraps our components with _apps.js component
// so we apply css library here

const app = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default app;