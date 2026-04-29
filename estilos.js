import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
  },
  header: {
    backgroundColor: '#8B0000',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  txtCap: { color: '#FFF', fontSize: 20 },
  txtSub: { color: '#FFF', fontSize: 30, fontWeight: 'bold' },
  corpo: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  tituloJogo: {
    fontSize: 24,
    color: '#FFF',
    marginVertical: 15,
    fontWeight: 'bold'
  },
  foto: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  btnVerificar: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },
  btnProximo: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 15,
  },
  txtBtn: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  msgResultado: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtRodape: { fontWeight: 'bold' }
});