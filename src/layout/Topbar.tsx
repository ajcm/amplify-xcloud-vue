import {  Text } from '@aws-amplify/ui-react';


const DefaultFlexExample = () => {

  return (
    <div style={{  height: '1.5rem', width: '200vw' }} >
  
      <Text
        variation="primary"
      //  as="p"
        lineHeight="1.5em"
        fontWeight={750}
        fontSize="1em"
        fontStyle="normal"
        textDecoration="none"
        margin={'10px 10px 10px 10px '}
     //   color={'white'}
         style={{color: 'white', textDecoration: 'none'}}

  
      >
        xCloud
      </Text>

    </div>
  );
};


export default DefaultFlexExample;