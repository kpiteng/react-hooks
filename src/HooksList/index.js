import * as React from 'react';
import {
    View, FlatList
} from 'react-native';
import HooksListItem from './HooksListItem';
import HooksListItemSeparator from './HooksListItemSeparator';
import Styles from './Styles';
const arrHooks = [
    {
        name: 'useState',
        navigateTo: 'UseStateExample'
    },
    {
        name: 'useEffect',
        navigateTo: 'UseEffectExample'
    },
    {
        name: 'useRef',
        navigateTo: 'UseRefExample'
    },
    {
        name: 'useMemo',
        navigateTo: 'UseMemoExample'
    },
    {
        name: 'useCallback',
        navigateTo: 'UseCallBackExample'
    }
]
function HooksList(props) {
    flatListItemSeparator = () => <View style={Styles.LineStyles} />;
    return (
      <View style={Styles.container}>
        <FlatList
            data={arrHooks}
            keyExtractor={(item) => String(item.name)}
            renderItem={({item, index}) => (
            <HooksListItem
                item={item}
                navigation={props.navigation}
            />
            )}
            ItemSeparatorComponent={() => <HooksListItemSeparator />}
            showsVerticalScrollIndicator={false}
      />
      </View>
    );
  }

export default HooksList;