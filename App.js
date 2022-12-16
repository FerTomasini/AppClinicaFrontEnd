import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Principal from './screens/Principal';
import PageLogin from './screens/PageLogin';
import Historico from './screens/Historico';
import Vacinas from './screens/Vacinas';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={PageLogin} />
        <Stack.Screen name="Aumigos da Clínica" component={Principal} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}