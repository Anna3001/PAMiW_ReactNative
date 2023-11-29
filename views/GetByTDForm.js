import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { getByTD } from "../viewModels/getByTDViewModel"

const GetByTDForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  const [movieDetails, setMovieDetails] = useState(null);

  const handleSubmit = async () => {
    const moviesContainer = await getByTD(title, director);

    if (moviesContainer && moviesContainer.length > 0) {
      setMovieDetails(moviesContainer[0]); 
    } else {
      setMovieDetails(null);
    }
    console.log(movieDetails);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get by title and director</Text>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Director:</Text>
      <TextInput
        style={styles.input}
        value={director}
        onChangeText={(text) => setDirector(text)}
      />

      <Button title="Submit" color="#8f4a9c" onPress={handleSubmit} />

      {movieDetails && (
        <View style={styles2.movieDetailsContainer}>
          <Text style={styles2.movieDetail}>Country: {movieDetails.country}</Text>
          <Text style={styles2.movieDetail}>Date: {movieDetails.date}</Text>
        </View>
      )}
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

const styles2 = StyleSheet.create({
  movieDetailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#dec4e4',
    borderRadius: 8,
  },
  movieDetail: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default GetByTDForm;