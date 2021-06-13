import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HooksList from './src';
import UseStateExample from './src/UseStateExample';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 19,
          },
        }}
      >
        <Stack.Screen 
          name="HooksList" 
          component={HooksList} 
          options={{ title: 'React Hooks' }}
        />
        <Stack.Screen 
          name="UseStateExample" 
          component={UseStateExample} 
          options={{ title: 'useState' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;