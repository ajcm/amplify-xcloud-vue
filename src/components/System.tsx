import React, { useState, useEffect } from 'react';
import { Button } from '@aws-amplify/ui-react';
import { getBackendUrl, getEcho } from '../services/debug-service';

const System = () => {
  const [echo, setEcho] = useState<string | null>(null);

  const testConnection = async () => {
    try {
      const data = await getEcho( "ok");
      setEcho(data);
    } catch (err: any) {
      setEcho("error: " + (err?.message || err));
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  const refresh = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEcho(null);
    testConnection();
  };

  return (
    <div>
      <p>Backend: {getBackendUrl()} </p>
      <p>Connection: {echo === null ? "testing connection" : echo} </p>
      <Button className="btn-submit" onClick={refresh}>Reconnect</Button>
    </div>
  );
};

export default System;

