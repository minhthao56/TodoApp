import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {IconSet, TextBold, TextRegular} from '../common';

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
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.containerIcon}>
                    <IconSet
                      name={item.icon}
                      size={22}
                      color={'#4168F3'}
                      type={item.type}
                    />
                  </View>
                  <TextRegular>{item.title}</TextRegular>
                </View>
              );
            }}
            keyExtractor={(item, i) => i.toString()}
            ItemSeparatorComponent={() => <View style={{height: 8}}></View>}
          />
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
});
