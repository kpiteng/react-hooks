import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  elementsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    marginTop: 7,
    paddingHorizontal: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    height: 39,
    borderRadius: 3,
  },
  stateValue: {
    marginTop: 5,
  },
  lineStyles: {
    marginHorizontal: 15,
    height: 1,
    backgroundColor: 'lightgray',
},
});
