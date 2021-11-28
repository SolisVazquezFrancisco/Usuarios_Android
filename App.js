import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pantalla de detalles del usuario 1.
function DetailsScreen1() {
  return (
    <View>
      <Text>Nombre: Antonio Morales</Text>
      <Text>Edad: 34 años</Text>
      <Text>Sexo: Hombre</Text>
    </View>
  );
}
//Pantalla de detalles del usuario 2.
function DetailsScreen2() {
  return (
    <View>
      <Text>Nombre: Margarita Fuentes</Text>
      <Text>Edad: 28 años</Text>
      <Text>Sexo: Mujer</Text>
    </View>
  );
}
//Pantalla de detalles del usuario 3.
function DetailsScreen3() {
  return (
    <View>
      <Text>Nombre: Margarita Fuentes</Text>
      <Text>Edad: 40 años</Text>
      <Text>Sexo: Hombre</Text>
    </View>
  );
}

//Pantalla Principal
function UsersScreen({ navigation }) {
  return (
    <View style={{marginTop:20}}>
      <Button
        title="Antonio Morales"
        onPress={() => navigation.navigate('Detalles Antonio')}
      />
      <Text></Text>
      <Button
        title="Margarita Fuentes"
        onPress={() => navigation.navigate('Detalles Margarita')}
      />
      <Text></Text>
      <Button
        title="Manuel Machado"
        onPress={() => navigation.navigate('Detalles Manuel')}
      />
    </View>
  );
}

//Pantalla de información.
function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta app te permite conocer en más profundidad a las personas.</Text>
    </View>
  );
}

//Cambiar de pantalla principal a pantallas de usuarios.
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Usuarios" component={UsersScreen} />
      <HomeStack.Screen name="Detalles Antonio" component={DetailsScreen1} />
      <HomeStack.Screen name="Detalles Margarita" component={DetailsScreen2} />
      <HomeStack.Screen name="Detalles Manuel" component={DetailsScreen3} />
    </HomeStack.Navigator>
  );
}

//Navegación pantalla de información.
//¡NO TOCAR! No funciona sin esto.
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Información" component={InfoScreen} />
    </SettingsStack.Navigator>
  );
}

//Tab Navigator.
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}