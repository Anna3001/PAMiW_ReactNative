import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { getById } from "../viewModels/getByIdViewModel"

const GetById = () => {
  const [id, setId] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);

  const handleSubmit = async () => {
    const moviesContainer = await getById(id);

    if (moviesContainer && moviesContainer.length > 0) {
      setMovieDetails(moviesContainer[0]); 
    } else {
      setMovieDetails(null);
    }
    console.log(movieDetails);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get by ID</Text>

      <Text style={styles.label}>ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={(text) => setId(text)}
      />

      <Button title="Submit" color="#8f4a9c" onPress={handleSubmit} />

      
      {movieDetails && (
        <View style={styles2.movieDetailsContainer}>
          <Text style={styles2.movieDetail}>Title: {movieDetails.title}</Text>
          <Text style={styles2.movieDetail}>Director: {movieDetails.director}</Text>
          <Text style={styles2.movieDetail}>Country: {movieDetails.country}</Text>
          <Text style={styles2.movieDetail}>Date: {movieDetails.date}</Text>
        </View>
      )}
    </ScrollView>
  );
};

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
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

export default GetById;
