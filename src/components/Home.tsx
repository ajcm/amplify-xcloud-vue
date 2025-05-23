import { Link, View, Text } from '@aws-amplify/ui-react';

export default () => {
  return (
    <View>
      <Text fontSize="1.2em" >Hello </Text>
      <br></br>
      <ul>
        <li><Link href='/admin/token'>Token</Link></li>
        <li><Link href='/admin/system'>System</Link></li>
        <li><Link href='/admin/browserstorage'>Browser storage</Link></li>
      </ul>
    </View>
  );
};

