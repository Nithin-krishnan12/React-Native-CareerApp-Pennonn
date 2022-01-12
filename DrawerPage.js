import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function DrawerPage({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={{top: 10}}
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('Carreers');
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#001d3d',
            alignItems: 'center',
            padding: 8,
          }}>
          <Icon name="briefcase" size={25} color="#FFF" />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              left: 8,
            }}>
            {' '}
            Careers
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
