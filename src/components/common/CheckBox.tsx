import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

export const CheckBox: React.FC<ICheckBox> = ({isChecked}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  isChecked
    ? Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
      }).start()
    : Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
      }).start();

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Animated.View style={[{opacity: fadeAnim}]}>
          <Feather name="check" size={15} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    marginRight: 4,
  },
});
