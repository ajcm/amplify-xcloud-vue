// Components/NavBar.js
import { Text } from '@aws-amplify/ui-react';


// Renamed component from Home to Footer for clarity and to match file name
const Footer = () => {
   return (
      <Text style={{ fontSize: 8, color: 'white', backgroundColor: "black", height: "1.2rem" }}>
         xcloud v0.2
      </Text>
   );
};

export default Footer;