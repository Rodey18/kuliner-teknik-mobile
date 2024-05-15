import CustomLine from 'components/CustomLine';
import {COLOR} from 'constants/theme';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  navigation: any;
}

const SetUpAccountScreen: React.FC<Props> = ({navigation}) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleItemClick = (item: string) => {
    setClickedItem(prevItem => (prevItem === item ? null : item));
  };

  const isClicked = (item: string) => {
    return item === clickedItem;
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.listItemContainer}>
      {/* Alarm */}
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleItemClick('alarm')}>
        <View style={styles.listItemContent}>
          <View>
            <FontAwesome5Icon
              name="clock"
              size={20}
              color={isClicked('alarm') ? 'red' : 'black'}
            />
          </View>
          {/* Judul dan Penjelasan Alarm */}
          <View>
            <Text
              style={
                isClicked('alarm') ? styles.hoveredTitleText : styles.titleText
              }>
              Nyalakan Alarm
            </Text>
            <Text
              testID="penjelasan"
              style={[
                styles.penjelasanText,
                isClicked('alarm') && styles.hoveredPenjelasanText,
              ]}>
              Alarm akan bunyi untuk mengingatkan Anda untuk buka usaha!
            </Text>
            <CustomLine />
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switchContainer}
          />
        </View>
      </TouchableOpacity>

      {/* Keluar */}
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleItemClick('keluar')}>
        <View style={styles.listItemContent}>
          <View>
            <FontAwesome5Icon
              name="outdent"
              size={20}
              color={isClicked('keluar') ? 'red' : 'black'}
            />
          </View>
          {/* Judul dan Penjelasan Keluar */}
          <View>
            <Text
              style={
                isClicked('keluar') ? styles.hoveredTitleText : styles.titleText
              }>
              Keluar
            </Text>
            <Text
              testID="penjelasan"
              style={[
                styles.penjelasanText,
                isClicked('keluar') && styles.hoveredPenjelasanText,
              ]}>
              Ingin keluar dari akun? Pastikan tau untuk kembali, ya
            </Text>
          </View>
        </View>
        <FontAwesome5Icon
          name="angle-right"
          size={15}
          color={isClicked('keluar') ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <CustomLine />

      {/* Jadi Mitra */}
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleItemClick('mitra')}>
        <View style={styles.listItemContent}>
          <FontAwesome5Icon
            name="trash"
            size={20}
            color={isClicked('mitra') ? 'red' : 'black'}
          />
          {/* Judul dan Penjelasan Tutup Akun Mitra */}
          <View>
            <Text
              style={
                isClicked('mitra') ? styles.hoveredTitleText : styles.titleText
              }>
              Tutup Akun Mitra
            </Text>
            <Text
              testID="penjelasan"
              style={[
                styles.penjelasanText,
                isClicked('mitra') && styles.hoveredPenjelasanText,
              ]}>
              Jangan ragu untuk kembali kapanpun kamu siap, kami akan selalu
              menyambutmu
            </Text>
          </View>
        </View>
        <FontAwesome5Icon
          name="angle-right"
          size={15}
          color={isClicked('mitra') ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 24,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  hoveredTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  penjelasanText: {
    color: 'gray',
  },
  hoveredPenjelasanText: {
    color: 'red',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemContent: {
    flexDirection: 'row',
    width: 266, // !Hardcoding
    gap: 12,
    alignItems: 'center',
  },
});

export default SetUpAccountScreen;
