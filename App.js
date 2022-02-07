import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

import Weatherinfo from './components/Weatherinfo';

const WEATHER_API_KEY = 'ef4d6befb805f4ec72f0fa77a58f5bda';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');

  useEffect(() => {
    loading()
  }, []);

  // função de loading
  async function loading() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if(status != 'granted') {
        setErrorMessage('Acesso a localização necessário para a execução do app');
        return
      }

      // localização atual do usuário
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      // API Request
      const response = await fetch(weatherUrl);
      const result = await response.json();

      if(response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }

      // alert(`latitude: ${latitude} e longitude: ${longitude}`)

    } catch (error) {
      setErrorMessage(error);
    }
  }

  if(currentWeather) {
    // temperatura atual
    const { main : {temp} } = currentWeather;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Weatherinfo currentWeather={currentWeather} />
        </View>
        <StatusBar style="auto" />
      </View>
    )} else {
      return (
        <View style={styles.container}>
          <Text style={styles.txt}>{errorMessage}</Text>
          <StatusBar style="auto" />
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
