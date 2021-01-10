import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {blueColor} from '../../assets/styles';
import {TextLight, IconSet} from '../common';
import {ModalChooseActivity} from './ModalChooseActivity';

const colorData = [
  {
    title: 'Meeting',
    type: 'fa',
    icon: 'handshake-o',
  },
  {
    title: 'Travel',
    type: 'ii',
    icon: 'airplane-outline',
  },
  {
    title: 'Doctor',
    type: 'fti',
    icon: 'doctor',
  },
  {
    title: 'Study',
    type: 'fea',
    icon: 'book-open',
  },
  {
    title: 'Shopping',
    type: 'mci',
    icon: 'cart-outline',
  },
  {
    title: 'Cafe',
    type: 'ii',
    icon: 'cafe-outline',
  },
  {
    title: 'Music',
    type: 'fea',
    icon: 'music',
  },
];

export const ChooseIcons = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleShowModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TextLight styleText={styles.title}>Your work</TextLight>
      <View style={styles.containerColor}>
        {colorData.slice(0, 5).map((item, i) => {
          return (
            <View style={styles.containerIcon} key={i}>
              <IconSet
                name={item.icon}
                size={22}
                color={blueColor}
                type={item.type}
              />
            </View>
          );
        })}
        <TouchableOpacity
          style={{...styles.containerIcon, backgroundColor: '#f4f4f4'}}
          onPress={handleShowModal}>
          <IconSet name="plus" size={22} color={'black'} type="fea" />
        </TouchableOpacity>
        <ModalChooseActivity
          isModalVisible={isModalVisible}
          onBackdropPress={handleShowModal}
          dataIcon={colorData}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#454545',
    marginBottom: 4,
  },
  containerColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerIcon: {
    marginRight: 16,
    backgroundColor: '#EEF1FF',
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
