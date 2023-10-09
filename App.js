import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';
import { useState } from 'react';


export default function App() {
const API_KEY = 'AIzaSyCI1MkgopwzE62NW3kQclHN1a0ZImR-VfU'

const url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
const urlSignUp ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const [enteredEmail, setEnteredEmail] = useState('admin@gmail.com')
const [enteredPassword, setEnteredPassword] = useState('admin123')

async function login(){
    try {
      const response = await axios.post(url + API_KEY, {
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true})
        alert('logget ind' + response.data.idToken)

    } catch (error) {
      alert('ikke logget ind' + error.response.data.error.errors[0].message)
    }
}

async function signup(){
  try {
    const response = await axios.post(urlSignUp + API_KEY, {
      email:enteredEmail,
      password:enteredPassword,
      returnSecureToken:true})
      alert('oprettet ' + response.data.idToken)

  } catch (error) {
    alert('ikke oprettet ' + error.response.data.error.errors[0].message)
  }
}

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput 
      placeholder="Email"
      onChangeText={newText => setEnteredEmail(newText)}
      value={enteredEmail} 
      />
            <TextInput 
      placeholder="Password"
      onChangeText={newText => setEnteredPassword(newText)}
      value={enteredPassword} 
      />
      <Button title="Login" onPress={login} />
      <TextInput 
      placeholder="Email"
      onChangeText={newText => setEnteredEmail(newText)}
      value={enteredEmail} 
      />
            <TextInput 
      placeholder="Password"
      onChangeText={newText => setEnteredPassword(newText)}
      value={enteredPassword} 
      />
      <Button title="Sign up" onPress={signup} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
