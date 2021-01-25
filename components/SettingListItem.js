import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingListItem(props){
    const { settings, onPress } = props
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Ionicons style={styles.icon} name={settings.name_icon} size={24}/>
                <Text style={styles.name_destination}>{settings.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'flex-start',
        flexDirection:'row',
        padding:16,
        top: 16,
        borderRadius: 4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius:10,
        shadowOffset:{width: 0, height:0},
        marginBottom: 5
    },
    name_destination:{
        flexGrow:1
    },
    icon:{
        flexBasis:50
    }

})