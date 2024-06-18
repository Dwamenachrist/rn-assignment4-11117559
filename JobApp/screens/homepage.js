import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import Job from '../components/Job';
import Todo from '../components/todo';

const Home = () => {
  
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <StatusBar style="auto" />
      <Job />
      <Todo />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafd',
    padding: 20,
  },
});