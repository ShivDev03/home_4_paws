import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import { fontFamily, screenWidth } from '../../../utils/helper';

export default StyleSheet.create({
    imageBackground: {
        width: screenWidth,
        alignSelf: 'center',
        height: 400,
        backgroundColor: 'red',
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 150,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,
    },
    productName: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 28,
        fontFamily: fontFamily.bebasNeue_regular,
        color: colors.white,
    },
    productDescription: {
        marginLeft: 20,
        fontSize: 14,
        fontFamily: fontFamily.poppins_regular,
        color: colors.white,
    },
    heartButton: {
        backgroundColor: colors.white,
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heartIcon: {
        height: 24,
        width: 28,
        zIndex: 1,
    },
    flatList: {
        height: 400,
        backgroundColor: 'pink',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    arrowButton: {
        backgroundColor: colors.DodgerBlue,
        height: 50,
        width: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowIcon: {
        height: 24,
        width: 28,
        zIndex: 1,
    },
});
