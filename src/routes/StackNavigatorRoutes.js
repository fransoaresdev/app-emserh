import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Button,Text} from 'react-native';
import LoginScreen from "../screens/Login";
import IndexServidor from "../screens/Servidor";
import HomeScreen from "../screens/Home";
import UnidadesScreen from "../screens/Unidades";
import Header from "../components/Header";


const Tab   = createMaterialTopTabNavigator();

export default function StackNavigatorRoutes() {
   

    return (
          <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
          }} />

    );

}


