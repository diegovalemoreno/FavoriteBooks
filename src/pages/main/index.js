import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../store/actions/favorites';
import PropTypes from 'prop-types';
import styles from './styles';


class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    bookNameInput: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
  }

  addBook = () => {
    if (!this.state.bookNameInput.length) return;

    this.props.addFavoriteRequest(this.state.bookNameInput);
  }
  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  render() {
    console.tron.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Text style={styles.title}>Booksmark</Text>
          <Text style={styles.description}>
          Comece adicionando os seus livros aos favoritos
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="título do livro/ISBN"
              underlineColorAndroid="transparent"
              value={this.state.bookNameInput}
              onChangeText={bookNameInput => this.setState({ bookNameInput })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.addBook}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
                  Meus livros favoritos (3)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = ({ favorites }) => ({
  favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

