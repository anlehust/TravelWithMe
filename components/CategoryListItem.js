import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Rating } from "react-native-rating-element";

export default function CategoryListItem(props){
    const { category, onPress } = props
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.rank}>{category.id}</Text>
                <Text style={styles.name_destination}>{category.name}</Text>
                <Rating
                    rated={3.7}
                    totalCount={5}
                    ratingColor="#f1c644"
                    ratingBackgroundColor="#d4d4d4"
                    size={10}
                    readonly // by default is false
                    icon="ios-star"
                    direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                />
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
        marginBottom: 16
    },
    rank: {
        flexGrow:1
    },
    name_destination:{
        flexGrow:10
    }
})