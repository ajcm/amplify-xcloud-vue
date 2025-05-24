import { Grid, View } from '@aws-amplify/ui-react';

export default () => {

  return (
    <Grid
      templateColumns="1fr 1fr 1fr 1fr "
      templateRows="10rem 10rem 10rem"
    >
      <View backgroundColor={'blue'}
              maxWidth="200px" >a</View>

         <View backgroundColor={'blue'}
              maxWidth="200px" >b</View>

      <View backgroundColor={'blue'}>b</View>
      <View backgroundColor={'blue'}>c</View>
      <View backgroundColor={'blue'}>d</View>

    </Grid>
  );
};