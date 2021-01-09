import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IIconSet {
  name: string;
  size: number;
  color: string;
  type: string;
}
/*  | 'ant'
| 'ent'
| 'evi'
| 'fea'
| 'fa'
| 'fa5'
| 'fa5p'
| 'fti'
| 'mci'
| 'fd'
| 'mi'
| 'oi'
| 'sli'
| 'zci'
| 'ii'
| undefined; */
export const IconSet: React.FC<IIconSet> = ({name, size, color, type}) => {
  if (type === 'ant') {
    return <AntDesign name={name} color={color} size={size} />;
  }
  if (type === 'ent') {
    return <Entypo name={name} color={color} size={size} />;
  }
  if (type === 'evi') {
    return <EvilIcons name={name} color={color} size={size} />;
  }
  if (type === 'fea') {
    return <Feather name={name} color={color} size={size} />;
  }
  if (type === 'fa') {
    return <FontAwesome name={name} color={color} size={size} />;
  }
  if (type === 'fa5') {
    return <FontAwesome5 name={name} color={color} size={size} />;
  }
  if (type === 'fa5p') {
    return <FontAwesome5Pro name={name} color={color} size={size} />;
  }
  if (type === 'fti') {
    return <Fontisto name={name} color={color} size={size} />;
  }
  if (type === 'mci') {
    return <MaterialCommunityIcons name={name} color={color} size={size} />;
  }
  if (type === 'mi') {
    return <MaterialIcons name={name} color={color} size={size} />;
  }
  if (type === 'fd') {
    return <Foundation name={name} color={color} size={size} />;
  }
  if (type === 'oi') {
    return <Octicons name={name} color={color} size={size} />;
  }
  if (type === 'sli') {
    return <SimpleLineIcons name={name} color={color} size={size} />;
  }
  if (type === 'zci') {
    return <Zocial name={name} color={color} size={size} />;
  }
  if (type === 'ii') {
    return <Ionicons name={name} color={color} size={size} />;
  }

  return <AntDesign name="antdesign" />;
};
