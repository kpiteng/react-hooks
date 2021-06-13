import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpactity
} from 'react-native';
import Styles from './Styles';

function UseStateExample () {
    const [numVal, setNumVal] = useState(95);
    const [strVal, setStrVal] = useState('KPITENG');
    const [objVal, setObjValue] = useState({
        num: numVal,
        str: strVal
    })
    return(
        <View style={Styles.container}>
            <View>
                <Text>Enter Number</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Enter Number"
                    onChangeText={(text) => {
                        setNumVal(text);
                        setObjValue({...objVal, num: text})
                    }}
                    value={String(numVal)}
                    style={Styles.textInput}
                />
                <Text style={Styles.stateValue}>Number - {numVal}</Text>
            </View>
            <View style={Styles.stringContainer}>
                <Text>Enter String</Text>
                <TextInput
                    placeholder="Enter String"
                    onChangeText={(text) => {
                        setStrVal(text);
                        setObjValue({...objVal, str: text})
                    }}
                    value={strVal}
                    style={Styles.textInput}
                />
                <Text style={Styles.stateValue}>String - {strVal}</Text>
            </View>
            <View>
                <Text>{JSON.stringify(objVal)}</Text>
            </View>
        </View>
    )
}
export default UseStateExample;