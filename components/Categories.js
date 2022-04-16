import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const items= [
    {
        name: "pushpin",
        text: "Pick Up"
    },
    {
        name: "heart",
        text: "Soft Drinks"
    },
    {
        name: "github",
        text: "Bakery Items"
    },
    {
        name: "tag",
        text: "Fast Foods"
    },
    {
        name: "dingding",
        text: "Deals"
    },
    {
        name: "apple1",
        text: "Coffe & Tea"
    },
    {
        name: "android1",
        text: "Desserts"
    },
]

function Categories(props) {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "white",
            paddingLeft: 20,
            paddingVertical: 10,
        }} >
            <ScrollView horizontal showsHorizontalScrollIndicator= {false} >
                {items.map((item, index) => ( 
                    <View key={index} style={{ marginRight: 30, alignItems: "center" }} >
                        <AntDesign name={item.name}  size={40} color="red" />
                        <Text style={{ fontWeight: "bold", fontSize: 13 }} >{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default Categories;