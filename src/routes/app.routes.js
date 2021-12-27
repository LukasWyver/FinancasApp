import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const AppBottomTab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <AppBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 72,
          borderTopWidth: 0,
          backgroundColor: '#171717',
        },
        tabBarLabelStyle: {
          bottom: 16,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#00b94a',
        tabBarInactiveTintColor: '#949494',
      }}>
      <AppBottomTab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="people-outline"
              size={25}
              color={focused ? '#00b94a' : '#949494'}
            />
          ),
        }}
      />
      <AppBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              size={25}
              color={focused ? '#00b94a' : '#949494'}
            />
          ),
        }}
      />

      <AppBottomTab.Screen
        name="Registrar"
        component={New}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="cash-outline"
              size={25}
              color={focused ? '#00b94a' : '#949494'}
            />
          ),
        }}
      />
    </AppBottomTab.Navigator>
  );
}

export default AppRoutes;
