import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';

const Item = ({name, details}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const ListSearchbar = ({searchPhrase, setClicked, data}) => {
  const renderItem = ({item}) => {
    if (searchPhrase === '') {
      return <Item name={item.name} details={item.details}></Item>;
    }
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item name={item.name} details={item.details}></Item>;
    }
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item name={item.name} details={item.details}></Item>;
    }
  };
  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}>
        {!searchPhrase == '' && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '75%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});

export default ListSearchbar;
