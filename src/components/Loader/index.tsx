import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, scale } from '@utils'

export const Loader = () => {
    return (
        <View style={[styles.loading]}>
            <ActivityIndicator
                size={'large'}
                color={Colors.main}
                style={[
                    styles.wrapper,
                    { borderRadius: scale(20) },
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "transparent",
        zIndex: 100,
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})