import React from 'react';
import { YStack, H2, Separator, Theme, Button, ScrollView, View, Text } from 'tamagui';

import EditScreenInfo from '../../components/edit-screen-info';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '~/apollo/queries/getCategories';
import { category } from '~/types';

export default function TabOneScreen() {
  const { data, error, loading } = useQuery(GET_CATEGORIES, {
    variables: {
      first: 20,
    },
  });

  return (
    <Theme>
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor="$background">
        <CategoriesSlider allCategories={data?.categories?.nodes} />
        <H2>Tab One</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <Button backgroundColor="$primary">Primary Button</Button>
      </YStack>
    </Theme>
  );
}

interface CategoriesSliderProps {
  allCategories?: category[]; // fix the type
}

const CategoriesSlider = ({ allCategories }: CategoriesSliderProps) => {
  const snapItemWidth = 200;

  console.log('this is the categories', allCategories);

  return (
    <ScrollView
      horizontal
      snapToInterval={snapItemWidth}
      decelerationRate={0}
      snapToAlignment="center"
      flexGrow={0}
      showsHorizontalScrollIndicator={false}>
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
      <CategorySliderItem width={snapItemWidth} />
    </ScrollView>
  );
};
const CategorySliderItem = ({ ...props }) => {
  return (
    <Button color="$color" {...props}>
      Hellow
    </Button>
  );
};
