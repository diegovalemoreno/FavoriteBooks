import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoritesActions from '../../store/actions/favorites';
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
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
      loading: PropTypes.bool,
    }).isRequired,
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
            { !!this.props.favorites.errorOnAdd && (
              <Text style={styles.error}>{this.props.favorites.errorOnAdd}</Text>
            ) }

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
            { this.props.favorites.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : <Text style={styles.buttonText}>Adicionar aos favoritos</Text> }
              {/* <Text style={styles.buttonText}>Adicionar aos favoritos</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos (
              {this.props.favorites.data.length}
              )
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
