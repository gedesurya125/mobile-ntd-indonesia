import { YStack, H2, Separator, Theme, Button } from 'tamagui';

import EditScreenInfo from '../../components/edit-screen-info';

export default function TabOneScreen() {
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
