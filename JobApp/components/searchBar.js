import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Filter from '../components/button2'

const SearchBar = () => {
  return (
    <View style={styles.searchAndFilterContainer}>
  <View style={styles.searchBarContainer}>
  <Ionicons name="search-outline" size={30} color="black" />
    <TextInput placeholder="Search" style={styles.searchBarInput} />
  </View>
	<View style= {styles.filterContainer}>
	<Filter />
	</View>
  </View>

  );
};

const styles = StyleSheet.create({
	searchAndFilterContainer: {
		flexDirection: 'row',
	  },
	  searchBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f2f2f3',
		width: '75%', // Adjust width as needed
		height: 50,
		borderRadius: 10,
		padding: 10,
		marginBottom: 30,
	  },
	  searchBarInput: {
		flex: 1,
		marginLeft: 10, // Add margin to the left of the input
	  },
	  filterContainer: {
		marginLeft: 'auto',
	  },
});

export default SearchBar;
