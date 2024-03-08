import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { globalStyles } from './contants'
import { Rating } from '@kolking/react-native-rating'

const CommentComponent = (props) => {
    const { rating, name, ava, content } = props
    return (
        <View style={{ width: '100%', height: 'auto' }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 'auto', alignItems: 'center', marginBottom: 16 }}>
                <Image source={ava} style={{ width: 48, height: 48, borderRadius: 8 }} />
                <View style={{ marginStart: 20 }}>
                    <Text style={[globalStyles.text, { fontWeight: '500', marginBottom: 4 }]}>{name}</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: 'auto', alignItems: 'center' }}>
                        <Rating
                            scale={1.2}
                            rating={rating}
                            disabled
                            size={16}
                            baseColor='rgba(247, 122, 85, 1)'
                            fillColor='rgba(247, 122, 85, 1)'
                            fillSymbol={require('./assets/star-filled.png')}
                            baseSymbol={require('./assets/star-outlined.png')} />

                        <Text style={globalStyles.text}> 2 day ago</Text>
                    </View>
                </View>
            </View>
            <Text style={globalStyles.text}>
                {content}
            </Text>
        </View>
    )
}

export default CommentComponent
