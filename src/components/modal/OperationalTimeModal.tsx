import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CloseButton from 'components/button/CloseButton';
import {COLOR, FONT} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {useRestaurantContext} from 'stores/restaurant/RestaurantContext';
import {defaultRestaurant} from 'constants/default';
import CustomLine from 'components/CustomLine';

const OperationalTimeModal = ({modalVisible, onPress, id}: any) => {
  const {restaurants} = useRestaurantContext();
  const restaurant = restaurants.find(r => r.id === id) ?? defaultRestaurant;

  const isOpen = restaurant?.isOpen === true ? 'Buka' : 'Tutup';
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerModal}>
            <View style={styles.viewContainer}>
              <FontAwesome6Icon size={20} name="clock" color={COLOR.color30} />
              <Text style={FONT.identifier}>
                <Text style={{color: COLOR.green}}>Sekarang {isOpen}</Text>
              </Text>
            </View>
            <CloseButton onPress={onPress} />
          </View>
          <CustomLine type="horizontal" />
          <View style={styles.content}>
            <Text style={FONT.subtitle}>Jam Operasional</Text>
            {/* // TODO: data jam operasional  */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OperationalTimeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLOR.color60,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: '100%',
    height: '50%',
    shadowColor: COLOR.color30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,

    position: 'relative',
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
});
