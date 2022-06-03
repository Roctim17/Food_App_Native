import { View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import SearchBar from '../Component/SearchBar'
import Categories from '../Component/Categories'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" }}>
            <View style={{
                backgroundColor: "#fff",
                padding: 10,

            }}>
                <Header></Header>
                <SearchBar></SearchBar>
                <Categories></Categories>
            </View>
        </SafeAreaView>

    )
}