import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Nome,
  MaintoAction,
  NewLink,
  NewLinkButton,
  NewText,
  Logout,
  LogoutText,
} from './styles';

export default function Profile() {
  const navigation = useNavigation();
  const {user, signOut} = useContext(AuthContext);
  return (
    <Container>
      <Nome>{user && user.nome}</Nome>
      <MaintoAction>
        <NewLink>
          <NewLinkButton onPress={() => navigation.navigate('Registrar')}>
            <NewText>Novas transações</NewText>
          </NewLinkButton>
        </NewLink>

        <Logout onPress={() => signOut()}>
          <LogoutText>Sair</LogoutText>
          <Ionicons
            name="exit-outline"
            size={25}
            color="rgba(198, 44, 54, 0.7)"
          />
        </Logout>
      </MaintoAction>
    </Container>
  );
}
