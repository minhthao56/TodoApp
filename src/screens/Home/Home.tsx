import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {CardHome, HeaderAvatar, SearchBar, TitleHome} from '../../components';

const dataTest = [1, 23, 2, 1, 2, 4, 5, 2];

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderAvatar />
      <SearchBar />
      <TitleHome title="Today" />
      <View style={styles.flatList}>
        <FlatList
          data={dataTest}
          renderItem={() => {
            return <CardHome />;
          }}
          keyExtractor={(item, i) => i.toString()}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 16}}></View>}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TitleHome title="Detail" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 8,
  },
  flatList: {
    marginBottom: 8,
  },
});
