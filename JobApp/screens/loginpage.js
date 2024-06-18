import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onLoginPressed = () => {
    // Add your actual login logic here
    console.log("Login button pressed!");

    // After successful login, navigate to Home with data
    navigation.navigate("Home", { name: name, email: email }); 
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.name}>Jobizz</Text>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome Back 👋</Text>
        <Text style={styles.Job}>Let’s log in. Apply to jobs!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name} 
          onChangeText={(text) => setName(text)}
          keyboardType="name"
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>

      <Button
        mode="contained"
        onPress={onLoginPressed}
        style={styles.loginButton} 
      >
        Log in
      </Button>

      <View style={styles.lineSection}>
        <View style={styles.line} ></View>
        <Text style={styles.lineText}>Or continue with</Text>
        <View style={styles.line} ></View> 
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/apple.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Haven't an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace("Register")}>
          <Text style={styles.signupLink}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  socialContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
    loginContainer: {
      flex: 1,
      padding: 20,
      alignItems: 'left',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#356899',
    },
    welcome: {
      marginBottom: 30,
    },
    welcomeText: {
      fontSize: 22,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    Job: {
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#d6d6dd',
    },
    form: {
      width: '100%',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#356899',
      borderRadius: 4, 
      width: '100%',
    },
    registerText: {
    color: '#7C7C7C',
    },
    registerLink: {
      color: 'blue',
      fontWeight: 'bold',
      marginLeft: 5,
    },
    socialButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 1,
    borderWidth: 1, 
    borderColor: '#ffff', 
    marginHorizontal: 10,
  },
  icon: {
    width: 50,
    height:100,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signupLink: {
    color: '#356899',
  },
  lineSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 60,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
    
  },

  lineText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#AFB0B6',
  },
});