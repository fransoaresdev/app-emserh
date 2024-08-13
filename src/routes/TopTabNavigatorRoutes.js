import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import IndexServicos from "../screens/Servicos";
import NoticiasScreen from "../screens/Noticias";
import UnidadesScreen from "../screens/Unidades";
import Header from "../components/Header";

const Stack = createStackNavigator();
const Tab   = createMaterialTopTabNavigator();

export default function TopTabNavigatorRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: '#BFEEF5',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: { 
          backgroundColor: '#27B3C8' ,
          elevation:0,
         },
        
        tabBarIndicatorStyle:{
          backgroundColor:'#BFEEF5',
          height:2,
        },
        tabBarLabelStyle: {
            fontSize: 16,
            fontWeight:'bold',
            textTransform: 'capitalize',
            
          },

      }}>
        
        <Tab.Screen
        name="Noticias"
        component={NoticiasScreen}
        options={{
          showIcon: false ,
          tabBarLabel:'Notícias'
        }}  />

      <Tab.Screen
        name="Unidades"
        component={UnidadesScreen}
        options={{
          tabBarLabel: 'Unidades',
        }} />
        
      <Tab.Screen
        name="Servicos"
        component={IndexServicos}
        options={{
          tabBarLabel: 'Serviços',
        }} />

    </Tab.Navigator>
  );

  
}

const styles = StyleSheet.create({

  botaoMenu: {
    color: 'red',
    backgroundColor:'red'
  },
});