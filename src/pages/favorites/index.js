import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  }

  static propTypes = {
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.empty}>Nenhum favorito adicionado</Text>
      </View>
    );
  }
}

// const mapStateToProps = ({ favorites }) => ({
//   favorites,
// });

// export default connect(mapStateToProps)(Favorites);
export default Favorites;
