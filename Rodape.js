import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape({ autor, data }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.txt}>{autor}</Text>
      <Text style={styles.txt}>{data}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: { backgroundColor: '#FFF', padding: 10, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%' },
  txt: { fontWeight: 'bold' }
});