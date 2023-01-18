import { verticalScale, moderateScale, scale } from './scalling';
import { Platform, StyleSheet } from "react-native";
import { Colors } from "./colors";

export const CommonStyle = StyleSheet.create({

    shadow: {
        shadowColor: Colors.main,
        ...Platform.select({
            ios: {
                shadowColor: Colors.main,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                overflow: 'visible',


            },
            android: {
                elevation: 3,
                shadowColor: Colors.main,
            },
        }),
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginTop: verticalScale(50),
        width: undefined,
        minWidth: moderateScale(150),
        minHeight: verticalScale(55),

    },
    hitSlop: {
        right: scale(25),
        left: scale(25),
        top: scale(25),
        bottom: scale(25),
    }

});
