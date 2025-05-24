import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession, AuthSession } from "@aws-amplify/auth";
import MyButton from './TestGet';
import { Route, Routes } from 'react-router-dom';

import One from "./components/One"
import Two from "./components/Two"
import Three from "./components/Three"

import MainGrid from "./layout/MainGrid"

export default function App() {
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetchAuthSession({ forceRefresh: true });
        console.log(response.tokens?.accessToken?.toString());
        setSession(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getSession();
  }, []);

  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <Routes>
        <Route path="/" element={<MainGrid><One /></MainGrid>} />
        <Route path="/one" element={<MainGrid><One /></MainGrid>} />
        <Route path="/two" element={<MainGrid><Two /></MainGrid>} />
        <Route path="/three" element={<Three/>} />
      </Routes>
           <button onClick={signOut}>Logout
       
      </button>
      </>
        )}
      </Authenticator>
    </div>
  );
}

