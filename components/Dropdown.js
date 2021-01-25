import React, { Component} from 'react';
import { StyleSheet, FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class DropdownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_of_entertainment:[
               {label: 'All', value:'all'},
               {label: 'Foods and Drinks', value:'foodndrink'},
               {label: 'Photo', value:'photo'},
               {label: 'History', value:'history'}
            ]
          };
    }
    render(){
            return (
                <DropDownPicker
                        items={this.state.type_of_entertainment}
                        defaultValue={this.state.type_of_entertainment[0].type}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
            );
        }
}