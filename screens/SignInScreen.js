// SignInScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Signed in successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to sign-up screen
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E7FE',
      }}>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={{
          backgroundColor: '#FFF',
          padding: 10,
          marginBottom: 10,
          width: 300,
        }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        style={{
          backgroundColor: '#FFF',
          padding: 10,
          marginBottom: 10,
          width: 300,
        }}
      />
      <Button title="Sign In" onPress={handleSignIn} color="#6A0DAD" />
      <Button title="Sign Up" onPress={navigateToSignUp} color="#6A0DAD" />
    </View>
  );
};

export default SignInScreen;
