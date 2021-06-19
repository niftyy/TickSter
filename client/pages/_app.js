import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

// next js wraps our components with _apps.js component
// so we apply css library here

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return <div> 
    <h1>{currentUser.email}</h1>
    <Component {...pageProps} />
  </div>;
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return {
    pageProps,
    currentUser: data.currentUser,
  };
};

export default AppComponent;