import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ currentWeather, unitsSystem }) {
    const {
        main: { feels_like, humidity, pressure },
        wind: { speed },
    } = currentWeather

    // Arredondando os valores
    const roundFeelsLike = Math.round(feels_like);

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/s`;

  return (
    <View style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
            <View style={{ 
                ...styles.weatherDetailsBox, 
                borderRightWidth: 1, 
                borderRightColor: 
                BORDER_COLOR
            }}>
                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 
                        name='temperature-low' 
                        size={25} 
                        color={PRIMARY_COLOR} 
                    />
                    <View style={styles.weatherDetailsItems}>
                        <Text>Sensação</Text>
                        <Text style={styles.textSecondary}>{roundFeelsLike}°</Text>
                    </View>
                </View>
            </View>
            <View style={{ 
                ...styles.weatherDetailsBox, 
                borderRightWidth: 1, 
                borderRightColor: 
                BORDER_COLOR
            }}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons 
                        name='water' 
                        size={25} 
                        color={PRIMARY_COLOR} 
                    />
                    <View style={styles.weatherDetailsItems}>
                        <Text>Umidade</Text>
                        <Text style={styles.textSecondary}>{humidity}%</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.weatherDetailsRow}>
            <View style={{ 
                ...styles.weatherDetailsBox, 
                borderRightWidth: 1, 
                borderRightColor: 
                BORDER_COLOR
            }}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons 
                        name='speedometer' 
                        size={25} 
                        color={PRIMARY_COLOR} 
                    />
                    <View style={styles.weatherDetailsItems}>
                        <Text>Pressão</Text>
                        <Text style={styles.textSecondary}>{pressure} hPa</Text>
                    </View>
                </View>
            </View>
            <View style={{ 
                ...styles.weatherDetailsBox, 
                borderRightWidth: 1, 
                borderRightColor: 
                BORDER_COLOR
            }}>
                <View style={styles.weatherDetailsRow}>
                    <Feather 
                        name='wind' 
                        size={25} 
                        color={PRIMARY_COLOR} 
                    />
                    <View style={styles.weatherDetailsItems}>
                        <Text>Vento</Text>
                        <Text style={styles.textSecondary}>{windSpeed}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
        width: '95%',
    },
    weatherDetailsRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    }
})
