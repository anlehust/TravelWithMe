import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import SettingListItem from '../components/SettingListItem';

export default class SettingScreen extends Component {
    static navigationOptions ={
        title: 'Cài đặt'
      }
    constructor(props){
        super(props);
        this.state = {
          settings:[
            {id: 1, name:'Thông tin cá nhân', name_icon: 'person-outline', navigate_display:'PersonalInfomation'},
            {id: 2, name:'Tùy chọn hiển thị', name_icon: 'eye-outline', navigate_display:'DisplayOptions'},
            {id: 3, name:'Cài đặt bảo mật', name_icon: 'lock-closed-outline', navigate_display:'Security'},
            {id: 4, name:'Nhật kí xê dịch', name_icon: 'airplane-outline', navigate_display:'History'},
            {id: 5, name:'Đăng xuất', name_icon: 'exit-outline', navigate_display:'LogOut'},
          ]
        };
      }
    render(){
    const {navigation} = this.props;
    const {settings} = this.state;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={settings}
        renderItem={({item}) => <SettingListItem
        settings = {item} 
        onPress = {()=> {debugger; navigation.navigate(item.navigate_display, {name: item.name})}}
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
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    }
});