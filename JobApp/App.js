import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from 'react';


//Welcome Screens
import Login from "./screens/loginpage"
import Home from "./screens/homepage"


const Stack = createNativeStackNavigator();

function App() {

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <>
      
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;