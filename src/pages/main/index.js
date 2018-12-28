import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

const Main = () => (
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
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.footerLink}>
              Meus livros favoritos (3)
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

Main.navigationOptions = {
  header: null,
};
export default Main;
