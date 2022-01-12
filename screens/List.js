import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function List() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const ViewData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/Careers');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ViewData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={Styles.dataCard}>
              <Text style={Styles.text}>
                {item.postname}, ( {item.postNo})
              </Text>
              <Text style={Styles.text}>
                {item.description}, {item.postType}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
const Styles = StyleSheet.create({
  dataCard: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    color: '#001d3d',
    fontWeight: 'bold',
  },
});
