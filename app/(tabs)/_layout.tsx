import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { GetProps, Input, Text, XStack, getToken, styled, useTheme, View } from 'tamagui';
import { useSession } from '~/components/SessionContextProvider';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '~/apollo/queries/getCategories';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={21} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.color.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
          headerLeft: () => (
            <Link href="/profile" asChild>
              <Pressable
                style={{
                  marginLeft: getToken('$3', 'space'),
                }}>
                {({ pressed }) => (
                  <Ionicons
                    name="person-circle-outline"
                    size={34}
                    color={theme.secondary3.val}
                    style={{}}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerTitle: () => {
            return <SearchInput width={240} />;
          },
          headerRight: () => (
            <Link href={'/profile' as never} asChild>
              <Pressable
                style={{
                  backgroundColor: theme.secondary3.val,
                  padding: getToken('$2', 'space'),
                  borderRadius: 100,
                  marginRight: getToken('$3', 'space'),
                }}>
                {({ pressed }) => (
                  <Ionicons name="notifications-outline" size={18} color={theme.color.val} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}

interface SearchInputProps extends React.ComponentProps<typeof XStack> {}

const SearchInput = ({ width, ...props }: SearchInputProps) => {
  const theme = useTheme();

  return (
    <XStack width={width} position="relative" alignItems="center" {...props}>
      <Ionicons
        name="search-outline"
        size={16}
        color={theme.color.val}
        style={{
          position: 'absolute',
          left: 10,
          zIndex: 1,
        }}
      />
      <Input
        width={width}
        backgroundColor="$secondary3"
        borderColor="$colorTransparent"
        focusStyle={{
          borderColor: '$color',
        }}
        height="auto"
        borderRadius={100}
        paddingVertical={6}
        paddingLeft={34}
        borderWidth={0.5}
        placeholder="Search..."
        placeholderTextColor="$color"
      />
    </XStack>
  );
};

const StyledPressable = styled(Pressable, {
  name: 'styled-pressable',
});

const StyledLink = styled(Link, {
  href: '/' as never,
  name: 'styled-link',
});
