import * as React from 'react';
import {View, Text, Switch} from 'react-native';
import {useMemo} from 'react';
import Styles from './Styles';

function UseMemoListItem({item, onChange, arrTechnology}) {
  return useMemo(() => {
    return (
      <View style={Styles.container}>
        <View style={Styles.elementsContainer}>
          <Text>{item.name}</Text>
          <Switch onValueChange={onChange} value={item.status} />
        </View>
        <View>
          <Text>{JSON.stringify(arrTechnology)}</Text>
        </View>
      </View>
    );
  }, [item.status]);
}
export default UseMemoListItem;
