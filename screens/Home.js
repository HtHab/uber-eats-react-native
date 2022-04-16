import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "Q5XYSodnjjp94nUI1PytkaEzdhrrW6Wb4kSI9SpBwuRSW9juDXnOHK-HdGn3SsqF5C6QNoMUt6V0kpIYlU2nFRmmHPhR4HeYRbYnmYI2VT_P9OcTJuVKIhh-aOLeYXYx"

function Home({ navigation }) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants)

    const getRestaurantsFromYelp = () => {
        const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego"
    
    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`
        }}

        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses));
    }
    useEffect(()=>{
       //getRestaurantsFromYelp();
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, }} >
            <View style={{ backgroundColor: "white" , padding: 15 }} >
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}

export default Home;