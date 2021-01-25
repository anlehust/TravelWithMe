import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class DisplayOptions extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name')
        };
      };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: JSON.parse(navigation.getParam('name'))
  //   };
  // };
  // constructor(props){
  //   super(props);
  // }
  render() {
    debugger
    return (
      <View>
        <Text></Text>
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