import { height, width } from "./constant";



export enum itemsSize {
    guidelineBaseWidth = 428,
    guidelineBaseHeight = 926,
    widthRatio = width / guidelineBaseWidth,
    heightRatio = height / guidelineBaseHeight,
    aspectRatio = height / width,

}


export const scale = (size: number) => itemsSize.widthRatio * size;

export const verticalScale = (size: number) => itemsSize.heightRatio * size;

const defaultModerateFactor = width > itemsSize.guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size: number, factor = defaultModerateFactor) =>
    size + (scale(size) - size) * factor;
