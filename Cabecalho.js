import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.txtCap}>Quem é esse Pokémon</Text>
      <Text style={styles.txtSub}>ADIVINHA</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: { backgroundColor: '#8B0000', padding: 20, alignItems: 'center' },
  txtCap: { color: '#FFF', fontSize: 14 },
  txtSub: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});