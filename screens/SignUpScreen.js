// SignUpScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('SignIn'); // Navigate to sign-in screen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
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
      <Button title="Sign Up" onPress={handleSignUp} color="#6A0DAD" />
    </View>
  );
};

export default SignUpScreen;
