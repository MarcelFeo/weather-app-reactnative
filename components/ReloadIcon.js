import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index';

export default function ReloadIcon({ loading }) {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

  return (
    <View style={styles.reloadIcon}>
      <Ionicons 
        onPress={loading}
        name={reloadIconName} 
        size={30} 
        color={colors.PRIMARY_COLOR} 
    />
    </View>
  );
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 50,
        left: 190,
    }
})
