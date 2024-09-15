import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';

const Stack = createStackNavigator();


const LoginApp = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user) {
        navigation.replace('MainPage')
      }
    })
    return unsubscribe
  }, []

  )

  const goToMainPage = () => {
    //navigation.navigate('MainPage');
    auth
    .signInWithEmailAndPassword( email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email);
    })
    .catch(error => alert(error.message))
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCompleteType="password"
          textContentType="password"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={goToMainPage}>
          <Text  style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2f7e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#e6ffee',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginApp;
