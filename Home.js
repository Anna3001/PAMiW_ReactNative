import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import AddMovieForm from './views/AddMovieForm'; 
import UpdateMovieForm from './views/UpdateMovieForm'; 
import DeleteMovieForm from './views/DeleteMovieForm';
import GetAllMovies from './views/GetAllMovies';
import GetByTDForm from './views/GetByTDForm';
import TableView from './views/TableView'
import GetById from './views/GetById'

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <View style={styles.container}>
      <AddMovieForm />
      <UpdateMovieForm />
      <DeleteMovieForm />
      <GetByTDForm />
      <GetById />
      <GetAllMovies />
      <TableView movies={movies} setMovies={setMovies}/>
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