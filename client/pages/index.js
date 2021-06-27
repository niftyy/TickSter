const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in</h1>: <h1>You are not signed in</h1>;
};

// for fetching data while server side rendering
LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default LandingPage;