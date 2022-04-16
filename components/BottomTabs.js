import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function BottomTabs(props) {
    return (
        <View style={{
            margin:5,
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",
        }} >
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    );
}

const Icon = (props) => {
    return(
        <TouchableOpacity>
            <View>
                <FontAwesome5 
                    name={props.icon}
                    size={25}
                    style={{
                        marginBottom: 3,
                        alignSelf: "center",
                    }}
                />
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BottomTabs;