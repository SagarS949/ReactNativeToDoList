import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D2E0FD",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black", // Change color to a darker shade for contrast
    fontFamily: "Roboto",
  },
});
