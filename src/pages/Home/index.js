import React, {useContext, useState, useEffect} from 'react';
import {Alert, View, TouchableOpacity} from 'react-native';
import {
  Background,
  Container,
  Nome,
  Saldo,
  AreaDate,
  Title,
  List,
} from './styles';

import {AuthContext} from '../../contexts/auth';
import HistoricoList from '../../components/HistoricoList';
import DatePicker from '../../components/DatePicker';
import firebase from '../../services/firebaseConnection';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {format, isPast, isBefore} from 'date-fns';

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const {user} = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadList() {
      //atualizando meu saldo.
      await firebase
        .database()
        .ref('users')
        .child(uid)
        .on('value', snapshot => {
          setSaldo(snapshot.val().saldo);
        });
      //atualizando meu historico.
      await firebase
        .database()
        .ref('historico')
        .child(uid)
        .orderByChild('date')
        .equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10)
        .on('value', snapshot => {
          setHistorico([]);
          snapshot.forEach(childItem => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            };
            setHistorico(oldArray => [...oldArray, list].reverse());
          });
        });
    }
    loadList();
  }, [newDate]);

  function handleDelete(data) {
    //pegando data do item:
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);
    // console.log(dateItem);

    //pegando data de hoje:
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);
    // console.log(dateHoje);

    // if (isPast(new Date(data.date))) {
    if (isBefore(dateItem, dateHoje)) {
      //se a data é anterior a data atual(hoje)...
      alert('você não pode excluir este registro!');
      return;
    }
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir:\nvalor selecionado:R$ ${parseFloat(
        data.valor,
      )}\ntipo selecionado: ${data.tipo}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data),
        },
      ],
    );
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa'
          ? (saldoAtual += parseFloat(data.valor))
          : (saldoAtual -= parseFloat(data.valor));
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .child('saldo')
          .set(saldoAtual);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleShowPicker() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  const onChange = date => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  };
  return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Saldo>
      </Container>

      <AreaDate>
        <Title>Últimas movimentações</Title>
        <TouchableOpacity onPress={handleShowPicker}>
          <Ionicons name="calendar-sharp" color="#ccc" size={26} />
        </TouchableOpacity>
      </AreaDate>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        KeyExtractor={item => item.key}
        renderItem={({item}) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
      />
      {show && (
        <DatePicker onClose={handleClose} date={newDate} onChange={onChange} />
      )}
    </Background>
  );
}
