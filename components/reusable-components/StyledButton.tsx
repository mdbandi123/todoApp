import React, {useState} from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import {widthValue, size, actionType, fontSizeValue, widthValueNoMargin} from './stylingTypes';

type SButtonProps = {
  width: size,
  actionType: actionType, 
  fontSize: size,
  children: String,
  onPress: () => void,
}

const StyledButton = (props:SButtonProps): JSX.Element => {
  const {width, actionType, fontSize, onPress} = props;

  const [isPressed,setIsPressed] = useState<Boolean>(false);

  const pressInHandler = (): void => {
    setIsPressed(true);
  };

  const pressOutHandler = (): void => {
    setIsPressed(false);
  }

  return (
    <>
      <Pressable
        style={isPressed ? [styles({width: width, actionType: actionType}).defaultPressable, styles({width: width, actionType: actionType}).tappedPressable] : styles({width: width, actionType: actionType}).defaultPressable} 
        onPressIn={pressInHandler} 
        onPressOut={pressOutHandler}
        onPress={onPress}>
        <Text style={styles({fontSize: fontSize, actionType:actionType}).text}>{props.children}</Text>
      </Pressable>
    </>
  );
};

const styles = (props: SButtonProps = {width: 'xs', fontSize: 'xs', actionType: 'default'}) => {
  //default values still render (look into if it can be memoized)
  let color = "#000"

  switch(props.actionType){
    case 'cancel':
      color = '#f24141';
      break;
    case 'confirm':
      color = '#007d0a';
      break;
    case 'default':
      break;
  }

  return{
    defaultPressable:{
      width: widthValueNoMargin[props.width],
      marginHorizontal: "2%",
      padding: 5,
      borderWidth: 1,
      borderColor: color,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
      },
    tappedPressable:{
      opacity: 0.4,
    },
    text:{
      fontSize: fontSizeValue[props.fontSize],
      color: color
    }
  }
}

export default StyledButton;