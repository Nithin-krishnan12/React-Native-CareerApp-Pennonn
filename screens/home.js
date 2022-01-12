import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Home({navigation}) {
  return (
    <View style={Styles.body}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={Styles.txt}> Career Application</Text>
      </View>

      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 355, height: 350}}
          source={require('../assets/images/Hiring-rafiki.png')}
        />
      </View>

      <View
        style={{
          flex: 1.5,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#f77f00',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Carreers')}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>
            Lets Begin
          </Text>
          <Icon
            name="chevron-with-circle-right"
            size={30}
            color="#FFF"
            style={{left: 100}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#001d3d',
  },

  txt: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'MoonDance',
  },
});

export default Home;
