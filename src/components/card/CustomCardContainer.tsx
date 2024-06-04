import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import CustomCard from './CustomCard';

type ScrollCard = {
  isHorizontal: boolean;
  showIndicator: boolean;
  navigation: any;
};

const CustomCardContainer: React.FC<ScrollCard> = (props: ScrollCard) => {
  return (
    <ScrollView
      horizontal={props.isHorizontal}
      showsVerticalScrollIndicator={props.showIndicator}
      showsHorizontalScrollIndicator={false}>
      <CustomCard
        isHorizontal={props.isHorizontal}
        navigation={props.navigation}
      />
    </ScrollView>
  );
};

export default CustomCardContainer;

const styles = StyleSheet.create({});
