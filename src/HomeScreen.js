import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const mockData = [
    {
        id: 1,
        title: 'The silence',
        author: 'J.K.Rowling',
        rating: 4.5,
        genres: ['Funny', 'Drama'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        img: require('./assets/img1.png'),
        comments: [
            {
                id: 2,
                name: 'Ronald Richards',
                rating: 5,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    },
    {
        id: 2,
        title: 'The silence',
        author: 'AK 47',
        rating: 3,
        genres: ['Fantasy', 'Drama', 'Fiction'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.\n\nAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.',
        img: require('./assets/img2.png'),
        comments: [
            {
                id: 1,
                name: 'Ronald Richards',
                rating: 2,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 2,
                name: 'Ronald Richards',
                rating: 5,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    },
    {
        id: 3,
        title: 'Songoku',
        author: 'J.K',
        rating: 5,
        genres: ['Fantasy', 'Drama', 'Fiction', 'Action'],
        description: 'Amet minim mollit non deserunt ullamco est sit',
        img: require('./assets/img3.png'),
        comments: [
            {
                id: 1,
                name: 'Ronald Richards',
                rating: 2,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 2,
                name: 'Ronald Richards',
                rating: 5,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    },
    {
        id: 4,
        title: 'The silence',
        author: 'J.K.Rowling',
        rating: 2,
        genres: ['Fantasy'],
        description: 'The silence...',
        img: require('./assets/img4.png'),
        comments: [
            {
                id: 1,
                name: 'Ronald Richards',
                rating: 2.0,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4.0,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    },
    {
        id: 5,
        title: 'Harry Potter and the Sorcer',
        author: 'J.K.Rowling',
        rating: 3.5,
        genres: ['Fantasy', 'Drama', 'Fiction', 'Visual'],
        description: 'The silence...',
        img: require('./assets/img5.png'),
        comments: [
            {
                id: 1,
                name: 'Ronald Richards',
                rating: 2,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 2,
                name: 'Ronald Richards',
                rating: 5,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    },
    {
        id: 6,
        title: 'Demon Slayer',
        author: 'J.K.Rowling',
        rating: 1.0,
        genres: ['Fantasy', 'Fiction'],
        description: 'The silence...',
        img: require('./assets/img6.png'),
        comments: [
            {
                id: 1,
                name: 'Ronald Richards',
                rating: 2,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 2,
                name: 'Ronald Richards',
                rating: 5,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 3,
                name: 'Ronald Richards',
                rating: 4.5,
                ava: require('./assets/ava.png'),
                content: 'Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit.'
            },
            {
                id: 4,
                name: 'Ronald Richards',
                rating: 4,
                ava: require('./assets/ava.png'),
                content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.'
            },
        ]
    }
]

const HomeScreen = (props) => {
    const [data, setdata] = useState(mockData)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ width: 'auto', height: 'auto', marginEnd: 16 }} onPress={() => props.navigation.navigate('DetailScreen', { ...item })}>
                <Image style={styles.img} resizeMode='stretch' source={item.img} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 20 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    img: {
        backgroundColor: 'green',
        width: Dimensions.get('window').width * 0.55,
        height: Dimensions.get('window').height * 0.4
    }
})
