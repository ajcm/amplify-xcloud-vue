import { Flex} from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
//import { withSessionOr } from '../hooks/UserSession';




const ToolbarAuth = () => {
  return (
    <Flex gap={'2rem'} marginLeft={'10px'} justifyContent={'space-between'} backgroundColor={'black'} >
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/">Home</Link> &nbsp;&nbsp;&nbsp;
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/todo">Todo </Link>&nbsp;&nbsp;&nbsp;
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/note">Notes </Link>&nbsp;&nbsp;&nbsp;
      <Link  style={{color: 'black', textDecoration: 'none'}} to="/wiki">Wiki </Link>     
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