import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

export default class Destinations extends React.Component {
  static navigationOptions ={
    title: 'Điểm đến dành cho bạn'
  }
  constructor(props){
    super(props);
    this.state = {
      destinations:[]
    };
    fetch('http://172.19.201.2:5000/des')
    .then((response) => response.json())
      .then((json) => {
        this.setState({ destinations: json });
      })
    .catch((error) => console.error(error));
    
    
  }
  render(){
    const {navigation} = this.props;
    const {destinations} = this.state;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={destinations}
        renderItem={({item}) => <CategoryListItem
        category = {item} 
        onPress = {()=>navigation.navigate('Destination',
        {destination: JSON.stringify(item)}
        )}
         />}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:16,
    paddingRight: 16,
    paddingTop: 16
  }
});