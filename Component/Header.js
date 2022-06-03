import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function Header() {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderBtn text="Delivery" />
            <HeaderBtn text="Pickup" />
        </View>
    )
}
const HeaderBtn = (props) => (
    <TouchableOpacity>
        <Text>{props.text}</Text>
    </TouchableOpacity>
)

