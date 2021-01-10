import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {blueColor} from '../../assets/styles';
import {Button, IconSet, TextBold, TextRegular} from '../common';

type ObjectIcon = {
  title: string;
  type: string;
  icon: string;
};

interface IModalChooseActivity {
  isModalVisible: boolean;
  onBackdropPress: Function;
  dataIcon: Array<ObjectIcon>;
}

export const ModalChooseActivity: React.FC<IModalChooseActivity> = ({
  isModalVisible,
  onBackdropPress,
  dataIcon,
}) => {
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => onBackdropPress()}
        animationIn={'zoomIn'}
        animationOut="zoomOut"
        backdropColor="#212121">
        <View
          style={{
            backgroundColor: 'white',
            height: '60%',
            borderRadius: 3,
            width: '100%',
            paddingHorizontal: 32,
            paddingVertical: 16,
          }}>
          <View style={{marginBottom: 16}}>
            <TextBold styleText={styles.title}>Choose your activity</TextBold>
          </View>

          <FlatList
            data={dataIcon}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.containerIcon}>
                    <IconSet
                      name={item.icon}
                      size={22}
                      color={blueColor}
                      type={item.type}
                    />
                  </View>
                  <TextRegular styleText={styles.textContent}>
                    {item.title}
                  </TextRegular>
                </View>
              );
            }}
            keyExtractor={(item, i) => i.toString()}
            ItemSeparatorComponent={() => <View style={{height: 12}}></View>}
          />
          <View style={styles.action}>
            <Button
              onPress={() => onBackdropPress()}
              styleButton={styles.btnCancel}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    marginRight: 16,
    backgroundColor: '#EEF1FF',
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    fontSize: 22,
  },
  textContent: {
    fontSize: 16,
    color: '#343434',
  },
  action: {
    marginTop: 8,
    width: '100%',
    alignItems: 'flex-end',
  },
  btnCancel: {
    backgroundColor: '#d62828',
  },
});
