import { Colors, Fonts, moderateScale } from "@utils";
import { I18nManager, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: moderateScale(16),
        color: Colors.main,
        fontFamily: Fonts.bold,
        textAlign: I18nManager.isRTL ? "left" : "left",
    },
});
