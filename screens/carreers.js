import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Carreers({navigation}) {
  const [postname, setPostName] = useState('');
  const [description, setDescription] = useState('');
  const [postNo, setNoOfPost] = useState(0);
  const [jobType, setJobtype] = useState(['Permanent', 'Temporary']);
  const [errorMsg, setErrorMessage] = useState('');
  const [postType, setselectedJobtype] = useState('Permanent');

  const addData = () => {
    if (
      postname === '' ||
      description === '' ||
      postNo === 0 ||
      postNo === ''
    ) {
      setErrorMessage('*Required Field');
    } else {
      async function postData(url = '', data = {}) {
        var data = {
          id: '',
          postname: postname,
          description: description,
          postNo: postNo,
          postType: postType,
        };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.json();
      }

      postData('http://10.0.2.2:8000/Careers').then(data => {
        console.log(data);
        alert('Added successfully');
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          paddingTop: 0,
          paddingBottom: 50,
          backgroundColor: '#001d3d',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            marginTop: 0,
            fontWeight: 'bold',
            paddingBottom: 20,
          }}>
          Career Form
        </Text>
        <View style={{paddingHorizontal: 32, marginBottom: 10, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Post Name
          </Text>

          <TextInput
            style={Styles.input}
            placeholder="Post Name"
            autoCapitalize="none"
            maxLength={20}
            onChangeText={text => setPostName(text)}
          />
          {postname === '' ? (
            <Text style={{color: 'red'}}>{errorMsg}</Text>
          ) : null}
        </View>
        <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Description
          </Text>
          <TextInput
            style={Styles.input}
            placeholder="Description"
            autoCapitalize="none"
            onChangeText={text => setDescription(text)}
          />
          {description === '' ? (
            <Text style={{color: 'red'}}>{errorMsg}</Text>
          ) : null}
        </View>
        <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Number of Posts
          </Text>
          <TextInput
            style={Styles.input}
            placeholder="Number of Posts"
            keyboardType="numeric"
            onChangeText={text => setNoOfPost(text)}
          />
          {postNo === 0 || postNo === '' ? (
            <Text style={{color: 'red'}}>{errorMsg}</Text>
          ) : null}
        </View>
        <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Job Types
          </Text>
          <SelectDropdown
            defaultValue={'Permanent'}
            defaultButtonText="Job Types"
            buttonTextStyle={{
              textAlign: 'left',
              zIndex: 100,
              left: '20%',
            }}
            buttonStyle={[
              Styles.input,
              {
                width: '100%',
              },
            ]}
            data={jobType}
            onSelect={(selectedItem, index) => {
              setselectedJobtype(selectedItem);
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => {
              return <Icon name="down" size={25} color="#000" />;
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => addData()}
          style={{
            backgroundColor: '#f77f00',
            width: '50%',
            height: 50,
            borderRadius: 20,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
            Add
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('List')}
          style={{
            backgroundColor: '#fff',
            width: '50%',
            height: 50,
            borderRadius: 20,
            marginTop: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#f77f00', fontSize: 18, fontWeight: 'bold'}}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
