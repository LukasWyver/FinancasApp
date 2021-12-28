import React, {useContext, useState} from 'react';
import {Background, Container, Nome, Saldo, Title, List} from './styles';

import {AuthContext} from '../../contexts/auth';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'despesa', valor: 1200},
    {key: '2', tipo: 'receita', valor: 1600},
    {key: '3', tipo: 'despesa', valor: 800},
    {key: '4', tipo: 'despesa', valor: 650},
  ]);

  const {user} = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 1.658,50</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        KeyExtractor={item => item.key}
        renderItem={({item}) => <HistoricoList data={item} />}
      />
    </Background>
  );
}
