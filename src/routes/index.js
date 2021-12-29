import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AuthContext} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131313',
      }}>
      <ActivityIndicator size="large" color="#00b94a" />
    </View>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
