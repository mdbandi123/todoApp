import React, {useState, useRef} from 'react';
import {StyleSheet, Modal, Image, SafeAreaView, View} from 'react-native';
import StyledInput from '../reusable-components/StyledInput';
import StyledButton from '../reusable-components/StyledButton';

type IMProps = {
  isOpen: boolean;
  modalStateHandler: () => void;
  addTodoItemHandler: () => void;
};

type ButtonAction = {
  onPress: () => void;
  payload?: boolean | string;
};

const InputModal: React.FC<IMProps> = ({isOpen, modalStateHandler, addTodoItemHandler}): JSX.Element => {

  // const sampleRef = useRef(null);
  const [item,setItem] = useState<string>('');

  const cancelButtonAction: ButtonAction = {
    onPress: modalStateHandler,
    payload: false,
  };

  const addButtonAction: ButtonAction = {
    onPress: addTodoItemHandler,
    payload: item,
  };

  const textHandler = (e: any): void => {
    //could also use onChangeText, but will stick to onChange here to show difference from web
    console.log(e.nativeEvent.text);

    setItem(e.nativeEvent.text);
  };

  const closeModalHandler = () => {
    modalStateHandler(false);
  }

  const submitHandler = () => {
    addTodoItemHandler(item);
    modalStateHandler(false);
  }


  return (
    <Modal animationType="slides" visible={isOpen}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/calendar.gif')}
          />
        </View>
        <View style={styles.inputView}>
          <StyledInput width="xl" fontSize="s" onChangeAction={textHandler}/>
        </View>
        <View style={styles.buttonView}>
          <StyledButton width="m" fontSize="m" actionType="confirm" onPress={submitHandler}>
            Add
          </StyledButton>
          <StyledButton
            width="s"
            fontSize="m"
            actionType="cancel"
            onPress={closeModalHandler}>
            Cancel
          </StyledButton>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '4%',
  },
  buttonView: {
    flex: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageView: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    //
  },
});

export default InputModal;
