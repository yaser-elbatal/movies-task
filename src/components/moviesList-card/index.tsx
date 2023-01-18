import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, CommonStyle, Fonts, moviesLsitProps, scale, verticalScale, width } from '@utils'
import { MainText } from '../main-text'
import { toMovieDetailes } from '../../navigation/routes-navigation'

export const MoviesListCard = ({ id, title, release_date, index }: moviesLsitProps) => {
    return (
        <Pressable style={[styles.card,]} onPress={() => toMovieDetailes(id)}>
            <Image
                source={{ uri: `https://source.unsplash.com/random/200x200?sig=${index}` }}
                style={styles.Img}
            />
            <View style={styles.wraper}>
                <MainText title={title!} numberOfLines={2} />
                <MainText title={release_date!} style={styles.date} />
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    card: {
        ...CommonStyle.shadow,
        backgroundColor: Colors.white,
        borderRadius: scale(10),
        margin: scale(5),
        flexDirection: 'column',
        width: width / 2 - scale(11)
    },
    Img: {
        width: '100%',
        height: scale(200),
        borderRadius: scale(10),

    },

    date: {
        color: Colors.black,
        marginTop: verticalScale(5),
        fontFamily: Fonts.regular

    },
    wraper: {
        padding: scale(5),
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    }
})