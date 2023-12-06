import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'; 
import Authorization from "./.shared/loginAPI";
import AuthForm from './views/AuthForm';
import Home from './Home'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(Authorization.isToken());

  return (
     <View style={styles.container}>  
      {token ? ( <Home /> ) : ( <AuthForm setToken={setToken} />)} 
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4def9',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
