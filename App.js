import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { estilos } from './estilos';
import Conteudo from './Conteudo';

const Cabecalho = () => (
  <View style={estilos.header}>
    <Text style={estilos.txtCap}>Jogo</Text>
    <Text style={estilos.txtSub}>Quem é esse</Text>
  </View>
);

const Rodape = () => (
  <View style={estilos.footer}>
    <Text style={estilos.txtRodape}>Wesley</Text>
    <Text style={estilos.txtRodape}>28/04/2026</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </SafeAreaView>
  );
}