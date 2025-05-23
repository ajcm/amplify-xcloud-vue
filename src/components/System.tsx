import React, { useState, useEffect } from 'react';
import { withAuthenticator, Button, Heading, Text } from '@aws-amplify/ui-react';
import { getBackendUrl } from '../services/debug-service';

export const Home = () => {
  const [echo, setEcho] = useState('');

  const testConnection = async () => {
     
    // try {
    //   const data = await getEcho({ "message": "ok" });

    //   console.log(data)
    //   setEcho(data.message);
    // } catch (err) {
    //   setEcho("error: " + err.message);
    //   return;
    // }
}


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
     
    testConnection();
    
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])



  const refresh = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEcho('');
    testConnection();

  }


return (
  <div>

    <p>Backend: {getBackendUrl()} </p>
    <p>Connection: {echo === null ? "testing connection" : echo} </p>
    <Button className="btn-submit" onClick={e => refresh(e)}>Reconnect</Button>

  </div>
);
};


export default Home;

