import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page!</h1>;
};

// for fetching data while server side rendering
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser'); 
  
  return data;
};

export default LandingPage;