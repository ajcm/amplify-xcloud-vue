import { Flex} from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
//import { withSessionOr } from '../hooks/UserSession';




const ToolbarAuth = () => {
  return (
    <Flex gap={'2rem'} padding={'1rem'} justifyContent={'space-between'} backgroundColor={'black'} >
      <Link  style={{color: 'white', textDecoration: 'none'}} to="/">Home- </Link>
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/todo">Todo </Link>
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/note">Notes </Link>
      <Link  style={{color: 'white', textDecoration: 'none'}} to="/wiki">Wiki </Link>     
      {/* <Link  style={{color: 'white', textDecoration: 'none'}} to="/storage">Storage </Link>   */}
    </Flex>
  );
};


// const ToolbarNoAuth = () => {
//   return (
//     <Flex gap={'2rem'}>     
//     </Flex>
//   );
// };


//export default withSessionOr(ToolbarAuth, ToolbarNoAuth);
export default ToolbarAuth