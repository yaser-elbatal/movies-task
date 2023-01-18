import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { useTypedSelector } from '@store';
import { scale, useFetching, verticalScale, width } from '@utils';
import { movieInfoAction } from '@actions'
import { useRoute } from '@react-navigation/native';
import { MainText } from '@components';

export const MovieDetailes = () => {

    const { params }: any = useRoute();
    const { movieInfo, } = useTypedSelector((state) => state.movies);

    useFetching(movieInfoAction(params))

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: `https://source.unsplash.com/random/200x200?sig=${params}` }}
                style={styles.Img}
            />

            <MainText title={movieInfo?.title} />
            <MainText title={movieInfo?.tagline} />
            <MainText title={movieInfo?.status} />

        </View>
    )
}


const styles = StyleSheet.create({
    Img: {
        width: width - scale(10),
        height: verticalScale(200),
        resizeMode: 'stretch',
        marginHorizontal: '1%',
        borderRadius: scale(10)
    }
})