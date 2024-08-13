import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';

const BackToTopButton = ({ scrollViewRef }) => {
  const handlePress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Voltar ao Topo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default BackToTopButton;