import { ListRenderItem, StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import { Fonts, moderateScale, moviesLsitProps, useFetching } from '@utils'
import { moviesLisAction } from '@actions'
import { useTypedSelector } from '@store';
import { List, Loader, MainText, MoviesListCard } from '@components';

export const MoviesList = () => {
    const { moviesList, loader } = useTypedSelector((state) => state.movies);

    useFetching(moviesLisAction())


    const renderItem: ListRenderItem<moviesLsitProps> = useCallback(({ item, index }) => {
        return (
            <MoviesListCard
                {...item}
                index={index + 1}
            />)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View>
                <MainText title={'MoviesList'} style={styles.title} />
            </View>
            {loader ? (
                <Loader />
            ) : (
                <List
                    data={moviesList}
                    renderItem={renderItem}
                    numColumns={2}
                />
            )}
        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: moderateScale(18),
        fontFamily: Fonts.extraBold
    }
});