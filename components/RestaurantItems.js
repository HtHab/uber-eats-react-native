import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://i.imgur.com/dxjd7FB.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://i.imgur.com/dxjd7FB.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://i.imgur.com/dxjd7FB.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
]

function RestaurantItems({ navigation, ...props}) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index}>
                    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}} onPress={() => navigation.navigate("RestaurantDetail",{ 
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories
                    })
                    } >
                    <View style={{
                        padding: 15,
                        marginTop: 10,
                        backgroundColor: "white",
                    }}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>

                    </TouchableOpacity>
                </View>
                ))}
        </>
    );
}

const RestaurantImage = (props) => {
    return (
        <>
            <Image source={{
                uri: props.image
            }} 
                style={{ width: "100%", height : 200 }}
            />
            <TouchableOpacity style={{
                position: "absolute",
                right: 20,
                top: 20,
            }} >
                <MaterialCommunityIcons name='heart-outline' size={25} color="red" />
            </TouchableOpacity>
        </>
    )
}

const RestaurantInfo = (props) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
        }}>
            <View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15
                }}>{props.name}</Text>
                <Text style={{
                    fontSize: 13,
                    color: "gray"
                }}>30-45 .min</Text>
            </View>
            <View style={{
                    backgroundColor: "#eee",
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    borderRadius: 15,
                    justifyContent: "center"
                }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    )
}

export default RestaurantItems;