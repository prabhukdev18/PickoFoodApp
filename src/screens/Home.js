import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home({route}) {
  console.log(route.params.email);
  return (
    <View>
      <Icon name="rocket" size={30} color="#900"></Icon>
      <Text
        style={{
          fontFamily: 'Octicons',
          fontSize: 30,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>
        {route.params.email}
      </Text>
    </View>
  );
}
