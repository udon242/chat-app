import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ApiKeySetting: undefined;
};

export type ApiKeySettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ApiKeySetting'
>;
