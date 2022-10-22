import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#E3E3E3",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.20,
        shadowRadius: 7,
        elevation: 5,
    },
    darkShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.20,
        shadowRadius: 7,
        elevation: 5,
    },

    chartShadow: {
        shadowColor: "#E3E3E3",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.20,
        shadowRadius: 20,
        elevation: 10,
    },
    cardShadow: {
        shadowColor: "#474747",
        shadowOffset: {
            width: 0,
            height:5,
        },
        shadowOpacity: 0.40,
        shadowRadius: 7,
        elevation: 10,
    },
    calendarShadow: {
        shadowColor: "#DCEBCC",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    imageShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    articleShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
});
