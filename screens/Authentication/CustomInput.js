import React from 'react';
import {View} from 'native-base';
import {TextInput, StyleSheet, useWindowDimensions} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input:{},
});

export default CustomInput;
