import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useState, useCallback} from 'react';
import UseCallbackListItem from './UseCallbackListItem';
import UseCallBackListItemSeparator from './UseCallBackListItemSeparator';
import Styles from './Styles';

const technology = [
  {
    name: 'React Native',
    status: true,
  },
  {
    name: 'React.js',
    status: true,
  },
  {
    name: 'Next.js',
    status: true,
  },
];

function UseCallBackExample() {
  const [arrTechnology, setArrTechnology] = useState(technology);
  const onChangeSwitch = useCallback((index) => {
    let array = arrTechnology;
    let object = array[index];
    object.status = !object.status;
    array[index] = object;
    setArrTechnology([...array]);
  }, []);
  return (
    <View style={Styles.container}>
      <FlatList
        data={arrTechnology}
        keyExtractor={(item) => String(item.name)}
        renderItem={({item, index}) => (
          <UseCallbackListItem
            arrTechnology={arrTechnology}
            item={item}
            onChange={() => onChangeSwitch(index)}
          />
        )}
        ItemSeparatorComponent={() => <UseCallBackListItemSeparator />}
        showsVerticalScrollIndicator={false}
        extraData={arrTechnology}
      />
    </View>
  );
}
export default UseCallBackExample;
