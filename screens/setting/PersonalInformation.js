import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class PersonalInfomation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name')
        };
      };
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