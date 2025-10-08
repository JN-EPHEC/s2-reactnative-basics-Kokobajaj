import TodoItem from "@/components/TodoItem";
import { ScrollView, StyleSheet, Text } from "react-native";
import ProfileCard from "../../components/ProfileCard";


const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com' },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com' },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com' },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com' },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com' },
];

const Todo = [
  {todo: 'Learn React Native'}
] ;
 
export default function HomeScreen() {
  return (
      <ScrollView>
        <ProfileCard
          name="Alice"
          jobTitle="React Native Developer"
          imageUrl="https://picsum.photos/200/300"
        />
        <ProfileCard
          name="Komal"
          jobTitle="E-Business Student"
          imageUrl="https://picsum.photos/200/300"
        />

        <ProfileCard
          name="Lucas"
          jobTitle="E-Business Student"
          imageUrl="https://picsum.photos/200/300"
        />
        
        <Text style={styles.title}>My Todo List</Text>


        <TodoItem
          todo = "Learn React Native"
        />

        <TodoItem 
          todo = "Build a static UI"
        />

        <TodoItem 
        todo = "Practice with StyleSheet"
        />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});