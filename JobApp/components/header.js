import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


const Header = () => {
	const { name, email } = useRoute().params || {};
  return (
	<View style={styles.container}>
      <View style={styles.headerContainer}>
	  	<View style={styles.horizontal}>
        <Text style={styles.name}>{name}</Text> 
        <Text style={styles.email}>{email}</Text> 
		</View>
		<View style={styles.profileContainer}>
		<TouchableOpacity>
		<Image 
		source={require("../assets/profile.png")}
		style={styles.profileImage}  />
		</TouchableOpacity>
		</View>
		
	 </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
	container: {
	 marginTop: 50,
	  },
	  headerContainer: {
		flexDirection: 'row',
		
	  },
	  name: {
		fontSize: 20,
		fontWeight: "bold",
	  },
	  email: {
		fontSize: 16,
		color: '#95969D',
	  },
	  profileImage: {
		width: 50, 
  		height: 50,
	  },
	  profileContainer: {
		flexDirection: 'row',
		marginLeft: 'auto',
		marginBottom: 15,
		width: 50, 
    	height: 50,
    	borderRadius: 50, 
    	overflow: "hidden", 
    	backgroundColor: 'white',
	  },
})