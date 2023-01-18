import { Dimensions, Platform } from "react-native";

export enum axiosAPI {
    baseURL = "https://api.themoviedb.org/3/movie/",
    key = "0e5c829cc26499e9502b8404c2d42e75"
};

export enum Fonts {
    regular = "Cairo-Regular",
    Medium = "Cairo-Medium",
    bold = 'Cairo-Bold',
    extraBold = 'Cairo-ExtraBold',
    extraLight = 'Cairo-ExtraLight',
    black = 'Cairo-Black',
    light = 'Cairo-Light',
    semibold = 'Cairo-Semibold',
}

export const { width, height } = Dimensions.get("window");
export const IS_IPHONE_X: boolean = (height === 812 || height === 896) && Platform.OS === "ios";
export const IS_IOS: boolean = Platform.OS === "ios";
