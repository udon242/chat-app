import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from '../../utils/navigation';
import Home from '../Home';
import Settings from '../Settings';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: undefined }}
      />
      <Tab.Screen name="ApiKeySetting" component={Settings} />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
