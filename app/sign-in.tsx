import 'react-native-url-polyfill/auto';
import Auth from 'components/Auth';
import Account from 'components/Account';
import { View } from 'react-native';
import { useSession } from '~/components/SessionContextProvider';
import { Redirect } from 'expo-router';

export default function App() {
  const { session } = useSession();

  return <View>{session && session?.user ? <Redirect href="/(tabs)" /> : <Auth />}</View>;
}
