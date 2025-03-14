import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {productActionStart, productDetailsActionStart} from '../../../actions/homeAction';
import { Button } from '../../index';
import { icons } from '../../../assets';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {navigate} from '../../../navigation/navigationsServices';
import {screenName} from '../../../utils/enum';

const ProductDetails = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [productData, setProductData] = useState([]);
    const [productId, setProductId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActionStart({ response: (data) => setProductData(data?.data?.results) }));
    }, []);

    const renderItem = ({ item, index }) => (
        <ImageBackground source={{ uri: item.displayImage }} style={styles.imageBackground} resizeMode="stretch">
            <View style={styles.overlayContainer} onPress={() => setActiveIndex(index)}>
                <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']} style={styles.gradient}>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={styles.productName}>{item?.name}</Text>
                            <Text style={styles.productDescription}>{item?.description}</Text>
                        </View>
                        <TouchableOpacity style={styles.heartButton}>
                            <Image source={icons.unFilledHeart} style={styles.heartIcon} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </ImageBackground>
    );

    const scrollToIndex = (index) => {
        if (carouselRef.current) {
            carouselRef.current.scrollToIndex({ index, animated: true });
            setActiveIndex(index);
        }
    };

    return (
        <View>
            <View>
                <FlatList
                    ref={carouselRef}
                    data={productData}
                    renderItem={renderItem}
                    horizontal
                    style={styles.flatList}
                />
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity
                    onPress={() => activeIndex > 0 && scrollToIndex(activeIndex - 1)}
                    style={styles.arrowButton}>
                    <Image source={icons.paw} style={[styles.arrowIcon, { transform: [{ rotate: '-90deg' }] }]} />
                </TouchableOpacity>
                <Button buttonName="Paw" onPress={() => {
navigate(screenName.PRODUCT_DETAILS, {productId: productData[activeIndex].id});
                }} />
                <TouchableOpacity
                    onPress={() => activeIndex < productData.length - 1 && scrollToIndex(activeIndex + 1)}
                    style={styles.arrowButton}>
                    <Image source={icons.paw} style={[styles.arrowIcon, { transform: [{ rotate: '90deg' }] }]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductDetails;
