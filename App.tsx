import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppBottomNavigation from './src/feature/AppBottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
