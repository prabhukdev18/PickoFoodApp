import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DeliveryTab from '../components/DeliveryTab';
import PickupTab from '../components/PickupTab';

const CommonTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Roboto-Regular',
            fontWeight: '700',
            fontSize: 14,
          }}>
          RESTAURANTS NEAR YOU
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.8,
            borderRadius: 20,
            marginLeft: 20,
          }}>
          <TouchableOpacity
            style={[
              activeTab === 'tab1' ? styles.activeField : styles.notActiveField,
            ]}
            onPress={handleTab1}>
            <Text style={[activeTab === 'tab1' ? styles.activeText : '']}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              activeTab === 'tab2' ? styles.activeField : styles.notActiveField,
            ]}
            onPress={handleTab2}>
            <Text style={[activeTab === 'tab2' ? styles.activeText : '']}>
              Sell Pickup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TouchableOpacity
        style={{flexDirection: 'column', margin: 10, flexWrap: 'wrap'}}>
        {activeTab === 'tab1' ? <DeliveryTab /> : <PickupTab />}
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default CommonTab;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  activeField: {
    width: 100,
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'orangered',
    backgroundColor: 'orangered',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  notActiveField: {
    borderColor: 'green',
    paddingHorizontal: 8,
  },
  activeText: {
    fontWeight: '700',
    color: 'white',
  },
});
