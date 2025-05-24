import React, { ReactNode } from 'react';
import { Grid, Card, View } from '@aws-amplify/ui-react';



import  Topbar  from './Topbar';
import  Toolbar  from './Toolbar';


type MainGridProps = {
  children: ReactNode;
};

const MainGrid: React.FC<MainGridProps> = ({ children }) => 
{

  return (
    <div  style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
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

      >
        <Topbar />
        <Toolbar/>
      </Card>

      <Card
        columnStart="1"
        columnEnd="-1"
    
        maxWidth={'100vw'}
        
      >
        <View  style={{ margin: '10px  10px  10px  10px '}}  >
        {children}
        </View>
      </Card>

     
    </Grid>
    </div>
  );
};

export default MainGrid;