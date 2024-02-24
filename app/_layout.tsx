import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import config from '../tamagui.config';
import { useColorScheme } from 'react-native';
import { SessionProvider } from '~/components/SessionContextProvider';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SessionProvider>
      <TamaguiProvider config={config} defaultTheme={colorScheme as string}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </TamaguiProvider>
    </SessionProvider>
  );
}

//? supabase next steps https://docs.expo.dev/guides/using-supabase/#next-steps
