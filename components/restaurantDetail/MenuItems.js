import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const foods = [
    {
        title: "Doro",
        description: "cicken cooked for holidays and other occasion",
        price: "$13.55",
        image: "https://i.imgur.com/dxjd7FB.jpg"
    },
    {
        title: "Pasta",
        description: "Italian food that is eaten usually with a fork",
        price: "$13.55",
        image: "https://i.imgur.com/dxjd7FB.jpg"
    },
    {
        title: "shiro",
        description: "ethiopian food that is widely popular and usually eaten during fast",
        price: "$13.55",
        image: "https://i.imgur.com/dxjd7FB.jpg"
    },
    {
        title: "Pizza",
        description: "Itaian food which is a very thin bread with tomato sauce all over it",
        price: "$13.55",
        image: "https://i.imgur.com/dxjd7FB.jpg"
    },
    {
        title: "Burger",
        description: "A Sandwitch like food which usually have meat, tomato, and vegitables",
        price: "$13.55",
        image: "https://i.imgur.com/dxjd7FB.jpg"
    },
]

function MenuItems(props) {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItems}>
                            <BouncyCheckbox 
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                fillColor= "green"
                            />
                            <FoodInfo food={food} />
                            <FoodImage food={food}/>
                        </View>
                        <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const FoodInfo = (props) =>{
    return(
        <View style={{
            width: 240,
            justifyContent: "space-evenly",
        }}>
            <Text style={styles.titleStyle} >{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return(
        <Image source={{ uri: props.food.image }} style={{
            height: 100,
            width: 100,
            borderRadius: 8,
        }} />
    )
}

const styles = StyleSheet.create({
    menuItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",
    }
})


export default MenuItems;