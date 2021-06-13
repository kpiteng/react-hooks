import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpactity
} from 'react-native';
import {useIsMount} from './useIsMount';
import Styles from './Styles';

function UseEffectExample () {
    const [numVal, setNumVal] = useState(95);
    const [strVal, setStrVal] = useState('KPITENG');
    const isMount = useIsMount();

    useEffect(() => {
        console.log('useEffect with [] will call one time while component render', numVal);
    }, []);

    useEffect(() => {
        console.log('useEffect with [numValue] will call everytime while numVal changed', numVal);
    }, [numVal])

    useEffect(() => {
        if (isMount) {
            console.log('This console log on first time render, but not on change on numVal');
        } else {
            console.log('This console log every time when numVal changed, but not first time', numVal);
        }
    }, [numVal]);

    return(
        <View style={Styles.container}>
            <View>
                <Text>Enter Number</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Enter Number"
                    onChangeText={(text) => setNumVal(text)}
                    value={String(numVal)}
                    style={Styles.textInput}
                />
                <Text style={Styles.stateValue}>Number - {numVal}</Text>
            </View>
        </View>
    )
}
export default UseEffectExample;