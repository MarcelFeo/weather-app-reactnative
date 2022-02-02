import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    loading()
  }, []);

  // função de loading
  async function loading() {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if(status != 'granted') {
        setErrorMessage('Acesso a lkocalização necessário para a execução do app');
        return
      }

      // localização atual do usuário
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;

      alert(`latitude: ${latitude} e longitude: ${longitude}`)

    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>weather app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303C42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
  },
});
