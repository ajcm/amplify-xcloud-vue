// components/ParentComponent.tsx

import React, { ReactNode } from 'react';

type ParentProps = {
  children: ReactNode;
};

const ParentComponent: React.FC<ParentProps> = ({ children }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <h2>Parent Component</h2>
      {children}
    </div>
  );
};

export default ParentComponent;


