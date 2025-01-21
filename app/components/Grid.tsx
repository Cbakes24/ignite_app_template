import React from "react";
import { View, StyleSheet } from "react-native";

export const Grid4X4 = () => {
  // Define how many rows/columns you want
  const rows = 4;
  const cols = 4;

  return (
    <View style={styles.container}>
      {/* Map over the rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {/* Map over the columns */}
          {Array.from({ length: cols }).map((_, colIndex) => (
            <View style={styles.box} key={colIndex} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: "25%",       // 4 columns => each is 25%
    aspectRatio: 1,     // Make each box a square
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
  },
});

// export default Grid4X4;
