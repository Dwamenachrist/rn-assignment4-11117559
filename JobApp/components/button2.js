import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Filter = () => {
  return (
	<View>
	<TouchableOpacity>
  	 <Image style={styles.button} source={require("../assets/Filter.png")} />
  	</TouchableOpacity>
	</View>
  );
}

export default Filter

const styles = StyleSheet.create ({
	button: {
		width: 50,
		height: 50,
	},
})