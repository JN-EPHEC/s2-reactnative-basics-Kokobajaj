import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TodoItemProps {
  todo: string;
}

const TodoItem : React.FC<TodoItemProps> = ({
  todo
}) => { 
    return (
        
        <View style={styles.card}>
          <Text style={styles.todo}>{todo}</Text>
        </View>
    );
}
    

const styles = StyleSheet.create({

card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(93, 49, 4, 1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    marginLeft: 16,
  },
  todo: {
    fontSize: 20,
    fontWeight: "bold",
  },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
  },
});

export default TodoItem