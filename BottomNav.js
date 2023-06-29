import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, Entypo, SimpleLineIcons, Feather } from '@expo/vector-icons';


const BottomNav = () => {

    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>

                <View style={{ alignItems: "center" }}>
                    <Feather name="user" size={20} style={{ color: 'darkgray' }} />
                    <Text style={{ color: 'darkgray', marginTop: 3, fontSize: 14 }}>Home</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <SimpleLineIcons name="puzzle" size={20} style={{ color: 'darkgray' }} />
                    <Text style={{ color: 'darkgray', marginTop: 3, fontSize: 14 }}>Puzzle</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <FontAwesome name="graduation-cap" size={20} style={{ color: 'darkgray' }} />
                    <Text style={{ color: 'darkgray', marginTop: 3, fontSize: 14 }}>Learn</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <FontAwesome name="binoculars" size={20} style={{ color: 'darkgray' }} />
                    <Text style={{ color: 'darkgray', marginTop: 3, fontSize: 14 }}>Watch</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Entypo name="menu" size={20} style={{ color: 'white' }} />
                    <Text style={{ color: 'white', marginTop: 3, fontSize: 14 }}>More</Text>
                </View>

            </View>
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#272421',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 2,
    },
    iconWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 5
    }
});

