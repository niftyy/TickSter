import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page!</h1>;
};

// for fetching data while server side rendering
LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // request should be made to http://ingress-nginx...
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {
        headers: req.headers
      }
    );
    return data;
  } else {
    // we are on the browser
    // requests can be made with base url of ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
};

export default LandingPage;