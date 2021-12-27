import React, {useContext} from 'react';
import {Background, Container, Nome, Saldo, Title} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {user} = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 1.658,50</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>
    </Background>
  );
}
