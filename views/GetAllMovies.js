import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { getAll } from "../viewModels/getAllMoviesViewModel.js"

const GetAllMovies = () => {
  const start = 0;

  const handleSubmit = () => {
    getAll(start)
    console.log('GetAllMovies');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get all movies</Text>

      <Button title="Submit" color="#8f4a9c" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

export default GetAllMovies;