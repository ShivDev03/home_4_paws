import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {productDetailsActionStart} from '../../actions/homeAction';

const ProductDetails = ({route}) =>{
    const { productId } = route.params;
    console.log("==parth=>",productId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productDetailsActionStart({petsId:productId}))
    }, []);
    return(
        <View>
            <Text>Prodyc</Text>
        </View>
    )
}

export default ProductDetails;
