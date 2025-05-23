import React, { ReactNode } from 'react';
import { Grid, Card } from '@aws-amplify/ui-react';
import Footer from './Footer';


//import { Topbar } from './Topbar';
import  Toolbar  from './Toolbar';


type MainGridProps = {
  children: ReactNode;
};

const MainGrid: React.FC<MainGridProps> = ({ children }) => 
{


  return (
    <Grid
      columnGap="0.5rem"
      rowGap="1rem"
      templateColumns="1fr 1fr 1fr 1fr"
      templateRows="0fr 3fr 1fr"
    >
      <Card
        columnStart="1"
        columnEnd="-1"
        backgroundColor="black"
        maxHeight="120px"
      >
        <Toolbar/>
      </Card>

      <Card
        columnStart="1"
        columnEnd="-1"
        minHeight="500px"
        maxHeight="1145px"
      >
        {children}
      </Card>

      <Card
        columnStart="1"
        columnEnd="-1"
        backgroundColor="black"
        height="1.2rem"
        padding="0px"
      >
        <Footer />
      </Card>
    </Grid>
  );
};

export default MainGrid;