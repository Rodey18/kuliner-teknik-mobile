import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import StarIndicator from 'components/ui/StarIndicator';
import IconContainer from 'components/ui/IconContainer';
import CustomLine from 'components/CustomLine';
import ReviewCard from 'components/card/ReviewCard';

const ReviewScreen = ({navigation, route}: any) => {
  const {mitra} = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.ratingContainer}>
        <View>
          <View style={styles.viewRating}>
            <Text style={FONT.title}>{mitra.rating}</Text>
            <FontAwesome6Icon name="circle-info" size={16} />
          </View>
          <Text style={styles.textIdentifier}>4k+ rating</Text>
        </View>
        <StarIndicator StarNumber={mitra.rating} />
      </View>
      <Pressable style={styles.createUlasan}>
        <IconContainer
          icon="pen-to-square"
          size={24}
          isButton={false}
          isSolid={true}
        />
        <Text style={FONT.subtitle}>Tulis Ulasan</Text>
      </Pressable>
      <CustomLine type="horizontal" />
      <View>
        <Text style={FONT.title}>Apa Kata Sekte</Text>
        <ReviewCard mitra={mitra} />
      </View>
    </ScrollView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    backgroundColor: COLOR.color60,
    height: '100%',
    paddingHorizontal: 24,
  },
  textIdentifier: {
    ...FONT.subtitle,
    color: COLOR.color10,
  },
  viewRating: {
    ...CONTAINER.flexrow,
    gap: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginTop: 24,
    padding: 24,
    elevation: 4,
    borderRadius: 12,
    backgroundColor: COLOR.color60,
  },
  createUlasan: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    backgroundColor: COLOR.color60,
  },
});
