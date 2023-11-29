import { MovieModel } from "../models/movieModel.js";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { addMovie } from "../viewModels/addMovieViewModel.js"

const AddMovieForm = () => {
  const movie = new MovieModel({});

  const handleSubmit = () => {
    addMovie(movie);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a new movie</Text>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => movie.setTitle(text)}
      />

      <Text style={styles.label}>Director:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => movie.setDirector(text)}
      />

      <Text style={styles.label}>Country:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => movie.setCountry(text)}
      />

      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => movie.setDate(text)}
      />

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
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontStyle: 'italic'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

export default AddMovieForm;
