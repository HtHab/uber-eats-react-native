import React from 'react';
import { Image, Text, View } from 'react-native';

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://i.imgur.com/dxjd7FB.jpg",
    price: "$$",
    reviews: 1500,
    rating: 4.5,
    categories: [
        {title: "Indian"},
        {title: "Comfort Food"},
        {title: "Coffee"},
        {title: "Ice Cream"},
        {title: "Snacks"},
    ]
}




function About(props) {

    const {name, image, price, reviews, rating, categories} = props.route.params;
    const formattedCategories = categories.map((cat)=> cat.title).join(" . ");
    const description = `${formattedCategories} ${price ? " . " : ""} . 🍕. ${reviews} . 🎷(${rating}) `;


    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => {
    return(
        <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
    )
}

const RestaurantName = (props) => {
    return(
        <Text style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }} >{props.title}</Text>
    )
}

const RestaurantDescription = (props) => {
    return(
        <Text style={{
            fontWeight: "400",
            fontSize: 15.5,
            marginTop: 10,
            marginHorizontal: 15
        }}>{props.description}</Text>
    )
}

export default About;