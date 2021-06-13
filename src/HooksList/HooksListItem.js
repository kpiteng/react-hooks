import * as React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import Styles from './Styles';
function HooksListItem({item, navigation}) {
    return (
      <View style={Styles.hooksListItemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={Styles.hooksName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default HooksListItem;