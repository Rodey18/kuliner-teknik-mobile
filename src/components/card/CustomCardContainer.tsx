import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import CustomCard from './CustomCard';
import {Mitra} from 'utils/type';

type ScrollCard = {
  isHorizontal: boolean;
  showIndicator: boolean;
  navigation: any;
  mitras: Mitra[];
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
        mitras={props.mitras}
      />
    </ScrollView>
  );
};

export default CustomCardContainer;

const styles = StyleSheet.create({});
