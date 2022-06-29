import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import ListSearchbar from '../components/ListSearchbar';

import SearchBar from '../components/SearchBar';

const HomeSearch = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        `https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages`,
      );
      const data = await apiResponse.json();
      console.log(data);
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Programming Languages</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}></SearchBar>

      {!fakeData ? (
        <ActivityIndicator size="small" color="#00ff00"></ActivityIndicator>
      ) : (
        <ListSearchbar
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}></ListSearchbar>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
});

export default HomeSearch;
