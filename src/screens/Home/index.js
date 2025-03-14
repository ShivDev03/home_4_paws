import React from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';
import {ProductDetails} from '../../component';


const Home = () => {

  return (
    <View style={styles.container}>
<ProductDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowColor: '#000',
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
