import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage></RestaurantImage>
        </View>
    )
}

const RestaurantImage = () => (
    <>
        <Image source={{ uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg" }}
            style={{ width: '100%', height: 180 }}
        ></Image>
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <Text> Farmhouse Kitchen Thai Cuisine</Text>
)