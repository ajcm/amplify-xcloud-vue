import { Flex, View, Text } from '@aws-amplify/ui-react';




const DefaultFlexExample = () => {


  return (
    <Flex >

      <Text
        variation="primary"
        as="p"
        lineHeight="1.5em"
        fontWeight={750}
        fontSize="1.5em"
        fontStyle="normal"
        textDecoration="none"
        color={'white'}
        width="30vw"
      >
        xCloud
      </Text>

      {/* <Button backgroundColor={tokens.colors.pink[10]}>Option 1</Button>
      <Button backgroundColor={tokens.colors.pink[20]}>Option 2</Button> */}

      <View style={{ marginLeft: 'auto' }} >
        LoginButton
      </View>
    </Flex>
  );
};


export default DefaultFlexExample;