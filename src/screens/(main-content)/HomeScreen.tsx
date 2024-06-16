import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLOR, FONT} from 'constants/theme';
import CustomCardContainer from 'components/card/CustomCardContainer';
import {FIREBASE_AUTH} from 'configs/firebase';

const HomeScreen: React.FC = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <CustomCardContainer
        navigation={navigation}
        isHorizontal={true}
        showIndicator={false}
      />
      <View style={styles.scrollView}>
        <View style={styles.bestForYouContainer}>
          <Text style={styles.title}>Best for You</Text>
          <TouchableOpacity onPress={() => console.log('See More pressed')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
        <CustomCardContainer
          navigation={navigation}
          isHorizontal={false}
          showIndicator={false}
        />
      </View>
      <View onTouchEnd={() => FIREBASE_AUTH.signOut()}>
        <Text>Masuk</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLOR.color60,
    height: '100%',
  },
  scrollView: {
    marginTop: 10,
  },
  title: FONT.title,
  bestForYouContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'middle',
    marginBottom: 10,
  },
  seeMoreText: FONT.identifier,
});

export default HomeScreen;
