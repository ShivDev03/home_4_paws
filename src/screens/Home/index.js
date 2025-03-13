import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, FlatList} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;


const Home = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {

    }, []);
    // Example data for carousel items
    const carouselItems = [
        {
            id: 1,
            title: 'Item 1',
            text: 'Text for item 1',
            imgUrl: 'https://via.placeholder.com/300x200',
        },
        {
            id: 2,
            title: "Item 2",
            text: "Text for item 2",
            imgUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "Item 3",
            text: "Text for item 3",
            imgUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 4,
            title: 'Item 4',
            text: "Text for item 4",
            imgUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 5,
            title: "Item 5",
            text: "Text for item 5",
            imgUrl: "https://via.placeholder.com/300x200",
        },
    ];

    // Render each carousel item
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Snap Carousel</Text>

            <FlatList
                ref={carouselRef}
                data={carouselItems}
                renderItem={renderItem}
            />

            <Text style={styles.counter}>
                Item {activeIndex + 1} of {carouselItems.length}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    itemText: {
        fontSize: 14,
        padding: 10,
        paddingTop: 0,
    },
    counter: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Home;
