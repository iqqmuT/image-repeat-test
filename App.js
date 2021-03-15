import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const App = () => (
  <View>
    <Image source={require('./tile.png')} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 2000,
    height: 2000,
    resizeMode: 'repeat',
  },
});

export default App;
