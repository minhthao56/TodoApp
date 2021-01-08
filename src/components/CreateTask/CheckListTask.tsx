import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {TextLight, TextRegular} from '../common';

const dataTaskEx = [
  'Testcdefwef',
  'Testcdefwef',
  'Twqdestcdefwef',
  'wqdwqdTestcdefwef',
  'Tdqwdqwestcdefwef',
  'dqwdwqTestcdefwedwdf',
  'dqwdwqTestcdefwedwdf',
  'dqwdwqTestcdefwedwdf',
  'dqwdwqTestcdefwedwdf',
  'dqwdwqTestcdefwedwdfemdd',
];

export const CheckListTask = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    setToggleCheckBox(!toggleCheckBox);
    !toggleCheckBox
      ? Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.ease,
        }).start()
      : Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.ease,
        }).start();
  };

  return (
    <>
      <TextLight styleText={styles.title}>Create Checklist</TextLight>
      <FlatList
        data={dataTaskEx}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={fadeIn}
              delayPressIn={300}
              delayPressOut={300}>
              <View style={{marginRight: 4}}>
                <View style={styles.circle}>
                  <Animated.View style={[{opacity: fadeAnim}]}>
                    <Feather name="check" size={15} />
                  </Animated.View>
                </View>
              </View>
              <TextRegular>{item}</TextRegular>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{height: 4}}></View>}
        // contentContainerStyle={{paddingBottom: 54}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 16,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 16,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#545454',
    color: '#545454',
  },
  title: {
    marginBottom: 4,
    fontSize: 16,
  },
});
