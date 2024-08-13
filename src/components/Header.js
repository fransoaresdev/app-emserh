import React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {
    Text,
    StyleSheet,
    StatusBar,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

export default function Header() {
  return ( 
    <View>
      <Image source={require('../../assets/favicon.png')} />
      <Text>Header interno</Text>
    </View>
      
  );
}
