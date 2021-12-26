import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
    <View>
      <Text> Tela HOME</Text>
      {user && <Text>seja bem vindo {user.nome}</Text>}
    </View>
  );
}
