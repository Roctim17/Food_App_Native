import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function Header() {
    const [active, setActive] = useState("Delivery")
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderBtn text="Delivery" btnColor="black" textColor="white" active={active} setActive={setActive} />
            <HeaderBtn text="Pickup" btnColor="white" textColor="black" active={active} setActive={setActive} />
        </View>
    )
}
const HeaderBtn = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.active == props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginVertical: 35,

    }}
        onPress={() => props.setActive(props.text)}
    >
        <Text style={{
            color: props.active == props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: "900"
        }}>
            {props.text}
        </Text>
    </TouchableOpacity>
)

