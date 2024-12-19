import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// Get screen width dynamically for better responsiveness
const screenWidth = Dimensions.get("window").width;

const AddTaskComponent: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const handleAddTask = () => {
    console.log("Task Added:", { taskName, taskDate, taskPriority });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Task</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={taskName}
          onChangeText={setTaskName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date (e.g., 2024-12-19)"
          value={taskDate}
          onChangeText={setTaskDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Priority:</Text>
        <Picker
          selectedValue={taskPriority}
          style={styles.picker}
          onValueChange={(itemValue) => setTaskPriority(itemValue)}
        >
          <Picker.Item label="Low" value="Low" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="High" value="High" />
        </Picker>
      </View>

      <Button title="Add Task" onPress={handleAddTask} color="#028482" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensure content is scrollable
    padding: 20,
    backgroundColor: "#f4f4f4",
    justifyContent: "flex-start", // Align items to the top of the screen
    alignItems: "center", // Center content horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#028482",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: "100%", // Make input container take up full width
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
    width: "100%", // Full width input field
  },
  picker: {
    height: 100,
    width: screenWidth * 0.8, // Dynamically adjust width based on screen size
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default AddTaskComponent;
