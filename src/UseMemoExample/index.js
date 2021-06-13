import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useState} from 'react';
import UseMemoListItem from './UseMemoListItem';
import UseMemoListItemSeprator from './UseMemoListItemSeprator';
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

function UseEffectExample() {
  const [arrTechnology, setArrTechnology] = useState(technology);
  const onChangeSwtich = (index) => {
    let array = arrTechnology;
    let object = array[index];
    object.status = !object.status;
    array[index] = object;
    console.log('---arr', array);
    setArrTechnology([...array]);
  }
  return (
    <View style={Styles.container}>
      <FlatList
        data={arrTechnology}
        keyExtractor={(item) => String(item.name)}
        renderItem={({item, index}) => (
          <UseMemoListItem arrTechnology={arrTechnology} item={item} onChange={() => onChangeSwtich(index)} />
        )}
        ItemSeparatorComponent={() => <UseMemoListItemSeprator />}
        showsVerticalScrollIndicator={false}
        extraData={arrTechnology}
      />
    </View>
  );
}
export default UseEffectExample;
