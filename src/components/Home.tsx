import { Link, View } from '@aws-amplify/ui-react';

export default () => {
  return (
    <View>

      <ul>
        <li><Link href='/one'>one</Link></li>
        <li><Link href='/two'>two</Link></li>

      </ul>
    </View>
  );
};

