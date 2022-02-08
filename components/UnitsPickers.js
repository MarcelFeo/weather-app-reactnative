import { View, Picker, StyleSheet } from 'react-native';
import React, { useState } from 'react';
//import { Picker } from '@react-native-picker/picker';

export default function UnitsPickers({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) =>
            setUnitsSystem(item)
        }
        itemStyle={{ fontSize: 16 }}
      >
          <Picker.Item label="°C" value="metric" />
          <Picker.Item label="°F" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    unitsSystem: {
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        height: 50,
        marginBottom: 5,
        width: 100,
    }
})
