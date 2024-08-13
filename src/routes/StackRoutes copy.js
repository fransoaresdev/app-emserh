import React, { useContext } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Ionicons} from "@expo/vector-icons";
import TopTabNavigatorRoutes from "./TopTabNavigatorRoutes";
import {AuthContext} from '../contexts/AuthProvider';
import LoginScreen from "../screens/Login";
import NoticiasDetalheScreen from "../screens/Noticias/NoticiasDetalhe";
import ContrachequeScreen from "../screens/Servicos/Contracheque";
import OuvidoriaScreen from "../screens/Servicos/Ouvidoria/Ouvidoria";
import ProcessoScreen from "../screens/Servicos/Processo/Processo";
import SeletivoScreen from "../screens/Servicos/Seletivo/Seletivo";
import SairScreen from "../screens/Sair";
import RecuperarSenhaScreen from "../screens/RecuperarSenha/RecuperarSenha";


export default function StackRoutes() {    
  const Stack = createStackNavigator();
  const Tab   = createMaterialTopTabNavigator();
  const{logado,nomeUsuario} = useContext(AuthContext);


    return (
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={({ navigation }) => ({
            headerTitle: 'EMSERH',
            headerRight: () => (
              
              <View  style={styles.botaoHeader}>
              <Text>Usuário</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Sair')}>
              <Ionicons name="md-exit-outline" size={24} color="#fff" />
              </TouchableOpacity>
              </View>
            ),
            headerStyle: { 
              backgroundColor: '#27B3C8',
              elevation:0
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
          })}>
          <Stack.Screen name="TabStack" component={TopTabNavigatorRoutes} options={{ title: 'Tab Stack' }}/>
         
          <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarLabel: 'Login',
           }} />

          <Tab.Screen
              name="RecuperarSenha"
              component={RecuperarSenhaScreen}
              options={{
                tabBarLabel: 'RecuperarSenha',
           }} />

          <Tab.Screen
              name="Ouvidoria"
              component={OuvidoriaScreen}
              options={{
                tabBarLabel: 'Ouvidoria',
           }} />


          <Tab.Screen
              name="Seletivo"
              component={SeletivoScreen}
              options={{
                tabBarLabel: 'Seletivo',
           }} />

          <Tab.Screen 
              name="Processo"
              component={ProcessoScreen}
              options={{
                tabBarLabel: 'Processo',
           }} />


         <Tab.Screen
            name="Sair"
            component={SairScreen}
            options={{
              tabBarLabel: 'Sair',
            }} />

          <Tab.Screen
            name="Contracheque"
            component={ContrachequeScreen}
            options={{
              tabBarLabel: 'Contracheque',
            }} />


          <Tab.Screen
            name="NoticiaDetalhe"
            component={NoticiasDetalheScreen}
            options={{
              tabBarLabel: 'Notícia',
            }} />

        </Stack.Navigator>
      </NavigationContainer>
      );

}

const styles = StyleSheet.create({

  botaoHeader: {
    flexDirection:'row',
    marginRight:5
  },

});
