import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FavoriteItem = ({ favorite }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: favorite.book_cover_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{favorite.title}</Text>
      <Text style={styles.description}>{favorite.description}</Text>
    </View>
  </View>
);

FavoriteItem.propTypes = {
  favorite: PropTypes.shape({
    book_cover_url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FavoriteItem;
