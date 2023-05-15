import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ApiKeySettingScreenNavigationProp } from '../../utils/navigation';

const Home: React.FC = () => {
  const navigation = useNavigation<ApiKeySettingScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title={'API Key setting'} onPress={() => navigation.navigate('ApiKeySetting')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
