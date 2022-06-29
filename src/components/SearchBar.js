import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

import MaIcon from 'react-native-vector-icons/MaterialIcons';
import EnIcon from 'react-native-vector-icons/Entypo';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }>
          <MaIcon
            name="search"
            size={18}
            color="black"
            style={{marginLeft: 1}}></MaIcon>
          <TextInput
            style={styles.input}
            placeholder="Search"
            name="search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}></TextInput>
          {clicked && (
            <EnIcon
              name="cross"
              size={20}
              color="black"
              style={{padding: 1}}
              onPress={() => {
                setSearchPhrase('');
              }}></EnIcon>
          )}
        </View>
        {clicked && (
          <View style={{padding: 4, marginLeft: 4}}>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});

export default SearchBar;
