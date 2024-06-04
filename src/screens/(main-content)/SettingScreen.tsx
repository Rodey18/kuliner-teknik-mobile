import CustomLine from 'components/CustomLine';
import {COLOR, FONT} from 'constants/theme';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SettingScreen: React.FC<Props> = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.listItemContainer}>
      {/* Alarm */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <FontAwesome5Icon name="clock" size={20} color={COLOR.color30} />
          {/* Judul dan Penjelasan Alarm */}
          <View>
            <Text style={FONT.subtitle}>Nyalakan Alarm</Text>
            <Text style={FONT.content}>
              Alarm akan bunyi untuk mengingatkan Anda untuk buka usaha!
            </Text>
          </View>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </TouchableOpacity>
      <CustomLine type={'horizontal'} style={styles.line} />

      {/* Keluar */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <View>
            <FontAwesome5Icon name="outdent" size={20} color={COLOR.color30} />
          </View>
          {/* Judul dan Penjelasan Keluar */}
          <View>
            <Text style={FONT.subtitle}>Keluar</Text>
            <Text testID="penjelasan" style={FONT.content}>
              Ingin keluar dari akun? Pastikan tau untuk kembali, ya
            </Text>
          </View>
        </View>
        <FontAwesome5Icon name="angle-right" size={16} color={COLOR.color30} />
      </TouchableOpacity>
      <CustomLine type={'horizontal'} style={styles.line} />

      {/* Jadi Mitra */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <FontAwesome5Icon name="trash" size={16} color={COLOR.color30} />
          {/* Judul dan Penjelasan Tutup Akun Mitra */}
          <View>
            <Text style={FONT.subtitle}>Tutup Akun Mitra</Text>
            <Text style={FONT.content}>
              Jangan ragu untuk kembali kapanpun kamu siap, kami akan selalu
              menyambutmu
            </Text>
          </View>
        </View>
        <FontAwesome5Icon name="angle-right" size={15} color={COLOR.color30} />
      </TouchableOpacity>
      <CustomLine type={'horizontal'} style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: COLOR.color60,
    flex: 1,
    paddingTop: 24,
    gap: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    paddingRight: 24,
  },
  listItemContent: {
    flexDirection: 'row',
    width: 277,
    gap: 12,
    alignItems: 'center',
  },
  line: {
    marginLeft: 52,
  },
  switch: {
    marginHorizontal: -12,
  },
});

export default SettingScreen;
