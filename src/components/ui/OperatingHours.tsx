import {FONT} from 'constants/theme';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Schedule} from 'utils/type';

interface OperatingHoursProps {
  schedule: Schedule;
}

const OperatingHours: React.FC<OperatingHoursProps> = ({schedule}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={[FONT.title, styles.listText]}>
          {item.day.toUpperCase()}
        </Text>
        <Text style={[FONT.identifier, styles.listText]}>
          {item.open_time} - {item.close_time}
        </Text>
      </View>
    );
  };

  const orderedData = [
    {day: 'senin', ...schedule.senin},
    {day: 'selasa', ...schedule.selasa},
    {day: 'rabu', ...schedule.rabu},
    {day: 'kamis', ...schedule.kamis},
    {day: 'jumat', ...schedule.jumat},
    {day: 'sabtu', ...schedule.sabtu},
    {day: 'minggu', ...schedule.minggu},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={orderedData}
        renderItem={renderItem}
        keyExtractor={item => item.day}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    width: 150,
    textAlign: 'center',
    padding: 8,
  },
});

export default OperatingHours;
