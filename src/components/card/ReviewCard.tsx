import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserLogo from 'components/ui/UserLogo';

const ReviewCard = ({mitra}) => {
  return (
    <View>
      <View>
        <UserLogo mitra={mitra.image} />
        <Text>Saya</Text>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({});
