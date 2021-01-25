import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, Image } from 'react-native';
// import { Rating } from "react-native-ratings";
// import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary, launchCamera  } from 'react-native-image-picker';
export default class Destination extends React.Component {
  static navigationOptions = ({ navigation }) => {
    var destination = JSON.parse(navigation.getParam('destination'))
    return {
      title: destination['name']
    };
  };
  constructor(props){
    super(props);
  }
  state = {
    photo:null
  }
  choosePhoto = ()=>{
    let options = {mediaType: 'photo', quality: 1}; 
    launchCamera(options,(response)=>{
      if(response.uri){
        this.setState({photo: response});
      }
    })
  }
  render() {
    const {photo} = this.state
    return (
      <View>
        <Text>{JSON.parse(this.props.navigation.getParam('destination')).name}</Text>
        <Text>{JSON.parse(this.props.navigation.getParam('destination')).address}</Text>
        <Button title='Choose picture' onPress={this.choosePhoto}></Button>
        {photo!=null && (
          <Image
            source= {{uri: photo.uri}}
            style={{width: 300, height: 300}}
          />
        )}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});