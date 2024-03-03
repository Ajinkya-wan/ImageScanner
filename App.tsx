import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6A0DAD', // violet
          },
          headerTintColor: '#000', // black
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            title: 'Sign Up',
            headerTitleStyle: {
              color: '#6A0DAD', // violet
            },
          }}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{
            title: 'Sign In',
            headerTitleStyle: {
              color: '#6A0DAD', // violet
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
