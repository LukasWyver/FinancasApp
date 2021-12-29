import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  Tipo,
  Date,
  IconView,
  IconDelete,
  TipoText,
  ValorText,
} from './styles';

export default function HistoricoList({data, deleteItem}) {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
      <Container>
        <Tipo>
          {/* <IconView tipo={data.tipo}> */}
          <LinearGradient
            colors={
              data.tipo === 'despesa'
                ? ['#000', '#27080a', '#63161b', '#c62c36']
                : ['#000', '#00250e', '#005C25', '#00b94a']
            }
            start={{x: 0.68, y: 0}}
            end={{x: 0, y: 0.5}}
            style={styles.linearGradient}>
            <Ionicons
              name={
                data.tipo === 'despesa'
                  ? 'arrow-down-outline'
                  : 'arrow-up-outline'
              }
              // color={data.tipo === 'despesa' ? '#c62c36' : '#00b94a'}
              color="#f5f5f5"
              size={20}
            />
            <TipoText>{data.tipo}</TipoText>
          </LinearGradient>
          <Date>{data.date}</Date>
          {/* </IconView> */}
        </Tipo>
        <Tipo>
          <ValorText>R$ {data.valor}</ValorText>
          <IconDelete onPress={() => deleteItem(data)}>
            <Icon
              name="delete-outline"
              color="rgba(250, 250, 250, 0.2)"
              size={20}
            />
          </IconDelete>
        </Tipo>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flexDirection: 'row',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 6,
  },
});
