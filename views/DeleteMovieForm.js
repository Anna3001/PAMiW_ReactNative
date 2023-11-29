import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { deleteId } from "../viewModels/deleteMovieViewModel.js"

const DeleteMovieForm = () => {
  const [id, setId] = useState('');

  const handleSubmit = () => {
    deleteId(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Delete a movie</Text>

      <Text style={styles.label}>ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={(text) => setId(text)}
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

export default DeleteMovieForm;
