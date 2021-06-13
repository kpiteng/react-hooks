import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HooksList from './src';
import UseStateExample from './src/UseStateExample';
import UseEffectExample from './src/UseEffectExample';
import UseRefExample from './src/UseRefExample';
import UseMemoExample from './src/UseMemoExample';
import UseCallBackExample from './src/UseCallBackExample';

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
        }}>
        <Stack.Screen
          name="HooksList"
          component={HooksList}
          options={{title: 'React Hooks'}}
        />
        <Stack.Screen
          name="UseStateExample"
          component={UseStateExample}
          options={{title: 'useState'}}
        />
        <Stack.Screen
          name="UseEffectExample"
          component={UseEffectExample}
          options={{title: 'useEffect'}}
        />
        <Stack.Screen
          name="UseRefExample"
          component={UseRefExample}
          options={{title: 'useRef'}}
        />
        <Stack.Screen
          name="UseMemoExample"
          component={UseMemoExample}
          options={{title: 'useMemo'}}
        />
        <Stack.Screen
          name="UseCallBackExample"
          component={UseCallBackExample}
          options={{title: 'useCallback'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
