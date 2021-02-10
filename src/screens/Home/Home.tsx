import React from 'react';
import {FlatList, StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import {
  CardHome,
  DetailCard,
  HeaderAvatar,
  SearchBar,
  TitleHome,
} from '../../components';

const dataTest = [1, 23, 2, 1, 2, 4, 5, 2];

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <HeaderAvatar />
      </View>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <TitleHome title="Today" />
        <View style={styles.flatList}>
          <FlatList
            data={dataTest}
            renderItem={() => {
              return <CardHome />;
            }}
            keyExtractor={(item, i) => i.toString()}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{width: 16}} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TitleHome title="Detail" />
        <DetailCard />
      </ScrollView>
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
  header: {
    paddingVertical: 8,
  },
  search: {
    paddingBottom: 8,
  },
  scrollView: {
    paddingHorizontal: 4,
    paddingBottom: 80,
  },
});
