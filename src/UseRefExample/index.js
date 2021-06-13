import * as React from 'react';
import {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from './Styles';

function UseStateExample() {
  const [strVal, setStrVal] = useState('KPITENG');
  const stringInput = useRef(null);

  return (
    <View style={Styles.container}>
      <View>
        <Text>Enter Number</Text>
        <TextInput
          ref={stringInput}
          placeholder="Enter String"
          onChangeText={(text) => setStrVal(text)}
          value={strVal}
          style={Styles.textInput}
        />
        <Text style={Styles.stateValue}>String - {strVal}</Text>
      </View>
      <View style={Styles.accessNumberInputContainer}>
        <TouchableOpacity
          onPress={() => {
            stringInput.current.focus();
            console.log('stringInput - ', stringInput);
          }}>
          <Text>Press To Focus Keyboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default UseStateExample;
