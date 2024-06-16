import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CloseButton from 'components/button/CloseButton';
import {COLOR, FONT} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import CustomLine from 'components/CustomLine';
import TextHighlight from 'components/ui/TextHighlight';
import OperatingHours from 'components/ui/OperatingHours';

const OperationalTimeModal = ({modalVisible, onPress, mitra}: any) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerModal}>
            <View style={styles.viewContainer}>
              <FontAwesome6Icon size={20} name="clock" color={COLOR.color30} />
              <TextHighlight mitra={mitra} />
            </View>
            <Text style={styles.titleContent}>Jam Operasional</Text>
            <CloseButton onPress={onPress} />
          </View>
          <CustomLine type="horizontal" />
          <OperatingHours schedule={mitra.schedule} />
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
    paddingHorizontal: 32,
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
    gap: 8,
  },
  titleContent: {
    alignSelf: 'center',
    ...FONT.subtitle,
  },
});
