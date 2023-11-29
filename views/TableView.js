import React from "react";
import { useEffect, useState } from "react";
import { View, Pressable, Text, StyleSheet, Button } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { getAll } from "../viewModels/getAllMoviesViewModel";

export default function TableView({ movies, setMovies}) {
  const tableHead = ["Id", "Title", "Director", "Country"];
  const widthArray = [100, 200, 200, 200];

  const [startPoint, setStartPoint] = useState(0);
  const [pageNumber, setPageNumber] = useState(0); 

  useEffect(() => {
    getAll([startPoint], [pageNumber]).then((movies) => { setMovies(movies); });
  });

  return (
    <View>
      <Table borderStyle={{ borderWidth: 3, borderColor: "#8f4a9c" }}>
        <Row
          data={tableHead}
          widthArr={widthArray}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows 
          data={movies} 
          style={styles.row}
          widthArr={widthArray}
          textStyle={{ textAlign: "center" }} />
      </Table>
      <View>
        <Button title="<" color="#8f4a9c" onPress={() => {setStartPoint(startPoint - 7), setPageNumber(pageNumber - 1)}} />
        <Button title=">" color="#8f4a9c" onPress={() => {setStartPoint(startPoint + 7), setPageNumber(pageNumber + 1)}} />
      </View>
    </View>
  );
}

const styles = {
  head: { height: 60, backgroundColor: "#680c7c" },
  text: { textAlign: "center", fontWeight: "bold", color: "#ffffff" },
  row: { height: 60 },
};