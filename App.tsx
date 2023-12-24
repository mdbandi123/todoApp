import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import InputModal from './components/Views/InputModal';
import DisplayScreen from './components/Views/DisplayScreen';

function App(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [todo, setTodo] = useState<string[]>([]);

  const modalStateHandler = (modalState: boolean): void => {
    setIsModalOpen(modalState);
  };

  const addTodoItemHandler = (newTodo: string): void => {
    setTodo((current)=>{
      return [newTodo, ...current];
    })
  };

  const removeItemHandler = (name:string): void => {
    setTodo((current)=>{
      return current.filter(item => item !== name);
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <InputModal isOpen={isModalOpen} modalStateHandler={modalStateHandler} addTodoItemHandler={addTodoItemHandler}/>
      <DisplayScreen modalStateHandler={modalStateHandler} data={todo} removeItemHandler={removeItemHandler}/>
      {console.log(todo)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#508D69',
  },
});

export default App;
