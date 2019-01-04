import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  }

  state = {
    favorites: [
              {
                  "id": 21,
                  "user_id": 10,
                  "title": "Mitologia Nórdica",
                  "description": "Uma jornada da origem do universo até o fim do mundo.",
                  "type": "Mitologia",
                  "pagecount": 288,
                  "point": 0,
                  "book_cover_url": "https://i.ibb.co/6tZMXZ3/Mitologia-Nordica.jpg",
                  "created_at": "2018-12-25 15:33:38",
                  "updated_at": "2018-12-25 15:33:38",
                  "isbn": "9788561501716,8551001280",
                  "user": {
                      "id": 10,
                      "username": "Diegovalemoreno",
                      "email": "diegosvm@hotmail.com",
                      "password": "$2a$10$.heZHfLtklBkCXS3rgvbN.FHjXOv0EOK7r5UOPkOhPe.TeNxj8vs6",
                      "token": "45ce",
                      "token_created_at": "2018-12-27T11:02:43.601Z",
                      "created_at": "2018-12-20 12:58:31",
                      "updated_at": "2018-12-27 11:02:43"
                  }
              }
          ]
  };

  // static propTypes = {
  //   favorites: PropTypes.shape({
  //     data: PropTypes.arrayOf(PropTypes.shape({
  //       id: PropTypes.number,
  //     })),
  //   }).isRequired,
  // }

  // response.data.map(async (item) => {
  //   this.setState({ data: item });
  // });

  renderList = () => (
    <FlatList
      data= {this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        { !this.state.favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado</Text>
          : this.renderList() }
      </View>
    );
  }
}

// const mapStateToProps = ({ favorites }) => ({
//   favorites,
// });

// export default connect(mapStateToProps)(Favorites);
export default Favorites;
