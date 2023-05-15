import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from '../../utils/navigation';
import Home from '../Home';
import ApiKeySetting from '../ApiKeySetting';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'ApiKeySetting'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: undefined }}
      />
      <Tab.Screen name="ApiKeySetting" component={ApiKeySetting} />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
