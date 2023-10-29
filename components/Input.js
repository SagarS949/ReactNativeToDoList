import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

export default Input = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleBtnAdd = () => {
    if (todo !== "") {
      const newTodo = { name: todo, done: false };
      addTodo(newTodo);
      setTodo("");
    } else {
      alert("You must enter a todo name!");
    }
  };

  return (
    <View style={styles.inputContainer}>
    <TextInput 
      value={todo} 
      onChangeText={setTodo} 
      style={styles.input} 
      placeholder="Add a new todo..."
      placeholderTextColor="#757575"
    />
    <TouchableOpacity style={styles.button} onPress={handleBtnAdd}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#E6E6FA",
    borderRadius: 15,
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,   // Increase the borderRadius
    borderColor: "#aaa", // Change the borderColor
    marginRight: 10,
  },
  button: {
    width: 50, // Reduce the width
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27ae60", // Change the button color
    borderRadius: 25, // Make it circular
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
