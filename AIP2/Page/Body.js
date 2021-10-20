import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Var from '../Ressources/Variable/Var.js';
import Regle from './detailScreen';
import Roue from './Roue';
import EntrerNom from './Nom';
import Mode from './ChoixMode'



Var.set_Taille_ecran_largeur(Dimensions.get('window').width)
Var.set_Taille_ecran_longueur(Dimensions.get('window').height)




const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  Var.setNavigation(navigation);
  return (
    <Roue />
  );
}


// ecran de règles
function DetailsScreen({ navigation }) {
  Var.setNavigation(navigation);
  return (
    <Regle />
  );
}


// partie pour les nom

function NomEnter({ navigation }) {
  Var.setNavigation(navigation);
  return (
    <EntrerNom />
  );
}



function ChoixMode({ navigation }) {
  Var.setNavigation(navigation);

  return (
    <Mode />
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Nom" component={NomEnter} />
        <Stack.Screen name="Règles" component={DetailsScreen} />
        <Stack.Screen name="Roue" component={HomeScreen} />
        <Stack.Screen name="Mode" component={ChoixMode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;