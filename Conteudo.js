import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';
import { estilos } from './estilos'; 

export default function Conteudo() {
  // Ajustado para .jpg conforme você verificou
  const personagens = [
    { nome: 'Pikachu', img: require('./assets/pika.png') },
    { nome: 'Charmander', img: require('./assets/char.png') },
    { nome: 'Eevee', img: require('./assets/eve.jpg') },
    { nome: 'Squirtle', img: require('./assets/squar.png') }
  ];

  const [indice, setIndice] = useState(0);
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar = () => {
    if (palpite.toLowerCase().trim() === personagens[indice].nome.toLowerCase()) {
      setMensagem('✅ Acertou!');
    } else {
      setMensagem('❌ Errou! Tente novamente.');
    }
  };

  const proximo = () => {
    // Lógica para mudar o personagem (sequencial)
    const proximoIndice = (indice + 1) % personagens.length;
    setIndice(proximoIndice);
    setPalpite('');
    setMensagem('');
  };

  return (
    <View style={estilos.corpo}>
      <Text style={estilos.tituloJogo}>Pokémon</Text>
      
      <Image 
        source={personagens[indice].img} 
        style={estilos.foto} 
        resizeMode="contain" 
      />

      <TextInput
        style={estilos.input}
        placeholder="Quem é esse Pokémon?"
        onChangeText={setPalpite}
        value={palpite}
      />

      <TouchableHighlight 
        style={estilos.btnVerificar} 
        onPress={verificar}
        underlayColor="#388E3C"
      >
        <Text style={estilos.txtBtn}>Verificar</Text>
      </TouchableHighlight>

      <Text style={estilos.msgResultado}>{mensagem}</Text>

      <TouchableHighlight 
        style={estilos.btnProximo} 
        onPress={proximo}
        underlayColor="#1976D2"
      >
        <Text style={estilos.txtBtn}>Próximo</Text>
      </TouchableHighlight>
    </View>
  );
}