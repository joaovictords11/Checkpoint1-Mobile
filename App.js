import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Formulario from "./src/pages/Formulario";
import Resultado from "./src/pages/Resultado";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={Formulario} options={{ title: "Calculadora de Preço" }} />
        <Stack.Screen name="Resultado" component={Resultado} options={{ title: "Resultado" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}