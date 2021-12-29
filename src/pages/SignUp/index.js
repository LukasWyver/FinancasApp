import React, {useState, useContext} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Background,
  Container,
  AreaInput,
  Input,
  AreaButton,
  SubmitButton,
  SubmitText,
  BackButton,
  BackText,
} from '../SignIn/styles';

export default function SignUp() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp, loadingAuth} = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color="rgba(198, 44, 54, 0.7)"
          />
          <BackText>Voltar</BackText>
        </BackButton>

        <AreaInput>
          <Input
            placeholder="nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="e-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>
        <AreaButton>
          <SubmitButton onPress={handleSignUp}>
            {loadingAuth ? (
              <ActivityIndicator size={26} color="#131313" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )}
          </SubmitButton>
        </AreaButton>
      </Container>
    </Background>
  );
}
