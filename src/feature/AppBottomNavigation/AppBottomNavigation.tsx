import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from '../../utils/navigation';
import Home from '../Home';
import Settings from '../Settings';
import ApiKeySetting from '../ApiKeySetting';
import {
  ApiKeySettingContext,
  useApiKeySettingContext
} from '../../utils/apiKeySetting';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppBottomNavigation = () => {
  const apiKeySettingContext = useApiKeySettingContext();
  return (
    <ApiKeySettingContext.Provider value={apiKeySettingContext}>
      <Tab.Navigator initialRouteName={'Home'}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, tabBarIcon: undefined }}
        />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="ApiKeySetting" component={ApiKeySetting} />
      </Tab.Navigator>
    </ApiKeySettingContext.Provider>
  );
};

export default AppBottomNavigation;
