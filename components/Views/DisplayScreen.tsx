import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList, Pressable } from "react-native";
import StyledButton from "../reusable-components/StyledButton";

type DSProps = {
  modalStateHandler: () => void;
  removeItemHandler: () => void;
  data: string[];
}

type ButtonAction = {
  onPress: () => void,
  payload?: boolean,
}

const DisplayScreen: React.FC<DSProps> = ({modalStateHandler,removeItemHandler,data}): JSX.Element => {

  const openModalHandler = () => {
    modalStateHandler(true)
  }

  return(
    <>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Todo</Text>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
          data={data}
          renderItem={({item,index})=>{
            return(
              <Pressable onPress={()=>removeItemHandler(item)}>
                <Text key={index}>{item}</Text>
              </Pressable>
            )
          }}
          />
        </View>
        <View style={styles.bottomButtonContainer}>
          <StyledButton width={'l'} fontSize={'l'} onPress={openModalHandler}>
            Add Todo
          </StyledButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main:{
    flex: 1,
    // backgroundColor: 'white'
  },
  headerContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
    
  },
  headerText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 50
  },
  flatlistContainer:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButtonContainer:{
    flex: 1.25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DisplayScreen;