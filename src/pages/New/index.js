import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';
import {
  Background,
  Input,
  Title,
  ButtonArea,
  ButtonTouch,
  ButtonText,
} from './styles';
import Picker from '../../components/Picker';

export default function New() {
  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('selecione o tipo');
  const {user: usuario} = useContext(AuthContext); //renomeei meu user para 'usuario'

  function handleSubmit() {
    //alert(`valor selecinado:R$ ${valor}\ntipo selecionado: ${tipo}`)

    Keyboard.dismiss();

    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert('preencha todos os campos!');
      return;
    }
    Alert.alert(
      'Confirmando dados...',
      `valor selecinado:R$ ${parseFloat(valor)}\ntipo selecionado: ${tipo}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd(),
        },
      ],
    );
  }

  async function handleAdd() {
    //buscando a ID do User...
    let uid = usuario.uid;
    //gerando uma chave aleatoria para esta transação...
    let key = await firebase.database().ref('historico').child(uid).push().key;
    //enviando os novos dados para esta nova chave dentro da ID do User...
    await firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(key)
      .set({
        tipo: tipo,
        valor: parseFloat(valor),
        date: format(new Date(), 'dd/MM/yy'),
      });

    //atualizar o saldo do usuario.
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then(snapshot => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === 'despesa'
        ? (saldo -= parseFloat(valor))
        : (saldo += parseFloat(valor));
      user.child('saldo').set(saldo);
    });
    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={value => setValor(value)}
          />

          <Picker onChange={setTipo} tipo={tipo} />

          <View style={{width: '90%'}}>
            <Title>selecione o tipo: "ex: despesa"</Title>
          </View>

          <ButtonArea>
            <ButtonTouch onPress={handleSubmit}>
              <ButtonText>Registrar</ButtonText>
            </ButtonTouch>
          </ButtonArea>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
