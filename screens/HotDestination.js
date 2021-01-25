import React, { Component} from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CategoryListItem from '../components/CategoryListItem';
export default class HotDestinationScreen extends Component {
    static navigationOptions = {
        title: 'Hot gần đây'
    }
    constructor(props) {
        super(props);
        this.state = {
            destinations:[
            ],
            type_of_entertainment:[
                {label: 'All', value:'all'},
                {label: 'Foods and Drinks', value:'foodndrink'},
                {label: 'Photo', value:'photo'},
                {label: 'History', value:'history'}
             ]
          };
          fetch('http://192.168.0.103:5000/des')
          .then((response) => response.json())
            .then((json) => {
              debugger
              this.setState({ destinations: json });
            })
          .catch((error) => console.error(error));
    }
    // render(){
    //     return (
    //         <DropDownPicker
    //                 items={this.state.type_of_entertainment}
    //                 defaultValue={this.state.type_of_entertainment[0].type}
    //                 containerStyle={{height: 40}}
    //                 style={{backgroundColor: '#fafafa'}}
    //                 itemStyle={{
    //                     justifyContent: 'flex-start'
    //                 }}
    //                 dropDownStyle={{backgroundColor: '#fafafa'}}
    //             />
    //     );
    // }
    render() {
        const { navigation } = this.props;
        const { destinations } = this.state;
        return ( 
            <View style={{flex:1}}>
                <DropDownPicker
                        items={this.state.type_of_entertainment}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                <FlatList
                    contentContainerStyle = {styles.container}
                    data = { destinations }
                    renderItem = { 
                    ({ item}) => <CategoryListItem
                    category = { item }
                    onPress = { () => navigation.navigate('Destination',{destination: JSON.stringify(item)}) }
                    />}
                    keyExtractor = { item => `${item.id}` }
                />
            </View>
            );
        }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16
        },
        maincontent:{
            height:100,
            width:100
        }
    });