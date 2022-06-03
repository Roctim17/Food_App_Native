import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import SearchBar from '../Component/SearchBar'
import Categories from '../Component/Categories'
import RestaurantItem, {
    localRestaurants,
} from '../Component/RestaurantItem'
import { useState, useEffect } from 'react'
import Bottom from '../Component/Bottom'
// import { Divider } from 'react-native-elements'

const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.spoonacular.com/recipes/search`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        // getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee" }}>
            <View style={{
                backgroundColor: "#fff",
                padding: 10,

            }}>
                <Header activeTab={activeTab} setActiveTab={setActiveTab} ></Header>
                <SearchBar cityHandler={setCity}></SearchBar>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories></Categories>
                <RestaurantItem
                    restaurantData={restaurantData}
                    navigation={navigation}
                ></RestaurantItem>
            </ScrollView>
            {/* <Divider width={1}></Divider> */}
            <Bottom></Bottom>
        </SafeAreaView>

    )
}