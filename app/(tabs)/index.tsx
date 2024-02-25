import React from 'react';
import { YStack, H2, Separator, Theme, Button } from 'tamagui';

import EditScreenInfo from '../../components/edit-screen-info';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '~/apollo/queries/getCategories';

export default function TabOneScreen() {
  const { data, error, loading } = useQuery(GET_CATEGORIES, {
    variables: {
      first: 20,
    },
  });

  console.log('this is the data', { data, error, loading });

  return (
    <Theme>
      <YStack flex={1} alignItems="center" justifyContent="center" backgroundColor="$background">
        <H2>Tab One</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <Button backgroundColor="$primary">Primary Button</Button>
      </YStack>
    </Theme>
  );
}
