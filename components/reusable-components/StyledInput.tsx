import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {widthValue, fontSizeValue, sizes} from './stylingTypes';

type SInputProps = {
  width: sizes;
  fontSize: sizes;
  onChangeAction: () => void;
};

const StyledInput = (props: SInputProps): JSX.Element => {
  const {width, fontSize, onChangeAction} = props;
  return (
    <>
      <View style={styles({width: width}).inputContainer}>
        <TextInput
          style={styles({fontSize: fontSize}).input}
          onChange={onChangeAction}
        />
      </View>
    </>
  );
};

const styles = (props: SInputProps = {width: 'xs', fontSize: 'xs'}) => {
  return {
    inputContainer: {
      padding: 5,
      marginHorizontal: 5,
      backgroundColor: '#808080',
      borderRadius: 5,
      width: widthValue[props.width],
    },
    input: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      padding: 5,
      fontSize: fontSizeValue[props.fontSize],
    },
  };
};

export default StyledInput;
