import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="addTask" options={{ title: "Add Task" }} />
      <Tabs.Screen name="listTask" options={{ title: "List Task" }} />
    </Tabs>
  );
};

export default _layout;
