import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppBottomTabs from './src/feature/AppBottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
