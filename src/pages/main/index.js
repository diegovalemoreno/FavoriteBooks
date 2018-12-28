import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Main = () => (
  <View style={styles.container} />
);

Main.navigationOptions = {
  header: null,
};
export default Main;
