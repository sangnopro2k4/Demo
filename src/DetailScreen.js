import { Rating } from '@kolking/react-native-rating';
import { ArrowLeft2, Book, HambergerMenu, PlayCircle } from 'iconsax-react-native';
import React from 'react';
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import CommentComponent from './CommentComponent';
import { ButtonComponent } from './RegisterScreen';
import { globalStyles } from './contants';

const statusBarHeight = StatusBar.currentHeight

const DetailScreen = (props) => {

    const info = props.route.params
    const { navigation } = props

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <ArrowLeft2 size={24} color='rgba(146, 146, 162, 1)' onPress={() => navigation.goBack()} />
                <Text numberOfLines={1} style={[globalStyles.text, { fontWeight: '600', fontSize: 16, marginHorizontal: 16, flex: 1 }]}>{info.title}</Text>
                <HambergerMenu size={24} color='rgba(146, 146, 162, 1)' />
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 38 }}>
                <Image
                    source={info.img}
                    style={{
                        alignSelf: 'center',
                        marginBottom: 28,
                        marginTop: 24,
                        width: Dimensions.get('window').width * 0.55,
                        height: Dimensions.get('window').height * 0.4
                    }} resizeMode='cover' />
                <Text numberOfLines={1} style={[globalStyles.text, { marginBottom: 4, color: 'black', fontSize: 20, fontWeight: '500' }]}>{info.title}</Text>
                <Text style={[globalStyles.text, { fontSize: 16, fontWeight: '400', marginBottom: 16 }]}>{info.author}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Rating
                        scale={1.2}
                        rating={info.rating}
                        disabled
                        size={24}
                        baseColor='rgba(247, 122, 85, 1)'
                        fillColor='rgba(247, 122, 85, 1)'
                        fillSymbol={require('./assets/star-filled.png')}
                        baseSymbol={require('./assets/star-outlined.png')} />
                    <Text style={[globalStyles.text, { marginStart: 12, fontSize: 20 }]}>{info.rating.toFixed(1)}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 32 }}>
                    {info.genres.map(item => (
                        <Text style={{
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 24,
                            borderWidth: 1,
                            borderColor: 'rgba(106, 106, 139, 1)',
                            marginEnd: 8
                        }} key={item}>{item}</Text>
                    ))}
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 32 }}>
                    <ButtonComponent
                        text='Play Audio'
                        isIcon
                        textColor='rgba(255, 255, 255, 1)'
                        backgroundColor='rgba(72, 56, 209, 1)'
                        style={styles.button}
                        icon={<PlayCircle size={17} color='white' />} />
                    <View style={{ flex: 1 }} />
                    <ButtonComponent
                        text='Read Book'
                        textColor='rgba(72, 56, 209, 1)'
                        isIcon
                        style={styles.button}
                        icon={<Book size={17} color='rgba(72, 56, 209, 1)' />} />
                </View>
                <View>
                    <Text style={[globalStyles.text, { marginBottom: 12 }]}>Summary</Text>
                    <Text style={[globalStyles.text, { marginBottom: 40 }]}>
                        {info.description}
                    </Text>
                </View>
                <View style={{ marginBottom: 44, width: '100%', height: 'auto' }}>
                    <Text style={[globalStyles.text, { marginBottom: 12 }]}>Review </Text>
                    <View>
                        <Swiper
                            style={styles.wrapper}
                            height={'auto'}
                            autoplay
                            paginationStyle={{
                                bottom: -20,
                                left: 0,
                                right: null,
                                top: null
                            }}
                            dot={
                                <View
                                    style={{
                                        backgroundColor: 'rgba(213, 213, 227, 1)',
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        marginLeft: 3,
                                        marginRight: 3,
                                        marginTop: 3,
                                        marginBottom: 3
                                    }}
                                />
                            }
                            activeDot={
                                <View
                                    style={{
                                        backgroundColor: 'rgba(72, 56, 209, 1)',
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        marginLeft: 3,
                                        marginRight: 3,
                                        marginTop: 3,
                                        marginBottom: 3
                                    }}
                                />
                            }
                        >
                            {
                                info?.comments?.length > 0 && info.comments.map(comment => {
                                    return (
                                        <CommentComponent key={comment.id}
                                            content={comment.content}
                                            ava={comment.ava}
                                            name={comment.name}
                                            rating={comment.rating}
                                        />
                                    )
                                })
                            }
                        </Swiper>
                        <Text onPress={() => loadMore()} style={[globalStyles.text, {
                            color: 'rgba(247, 122, 85, 1)',
                            fontWeight: '600',
                            right: 0,
                            position: 'absolute',
                            bottom: -20,
                        }]}>View More</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    button: {
        width: '47%',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: 'rgba(72, 56, 209, 1)',
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(72, 56, 209, 1)'
    },
    navigation: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 37,
        paddingVertical: 10,
        marginTop: statusBarHeight,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})