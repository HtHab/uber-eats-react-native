import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SearchBar(props) {
    return (
        <View style={{
            flexDirection: "row",
            marginTop: 15,
        }}>
            <GooglePlacesAutocomplete
            query={{ key: "AIzaSyDbt_1WDKPnqkp1U-ezYYQfCQACr6HI5lY" }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "800",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        marginLeft: 10,
                        alignItems: "center",
                    }
                }}
                renderLeftButton= {() => <View style={{ marginLeft: 10 }}>
                    <Ionicons name='location-sharp' size={24} />
                </View>}
                renderRightButton={() => <View style={{
                    flexDirection:"row",
                    marginRight: 8,
                    padding: 9,
                    backgroundColor: "white",
                    alignItems: "center",
                    borderRadius: 30
                }} >
                    <AntDesign name='clockcircle' size={11} style={{
                        marginRight: 6
                    }} />
                    <Text>Search</Text>
                </View> }
            />
        </View>
    );
}

export default SearchBar;