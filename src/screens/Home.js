import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Searchbar, Card, Button, Title} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import CommonTab from './CommonTab';

export default function Home({route}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.logoImg}
            source={require('../img/pickoLogo.png')}
          />
          <Text
            style={{
              fontFamily: 'Octicons',
              fontSize: 20,
            }}>
            {/* {route.params.email} */}Hello User
          </Text>
        </View>
        <View style={styles.searchBar}>
          <Searchbar placeholder="Search" />
        </View>
        <View>
          <View style={styles.logoContainer}>
            <Text
              style={{
                fontFamily: 'Octicons',
                fontSize: 18,
                fontWeight: '800',
                color: 'black',
              }}>
              Top Categories
            </Text>
            <Text
              style={{
                fontFamily: 'Octicons',
                fontSize: 18,
              }}>
              <MIcon
                style={styles.cardIcon}
                size={20}
                color="black"
                name="filter-outline"
              />
              Filter
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <View>
                <ImageBackground
                  source={require('../img/cardImg1.png')}
                  style={{
                    width: 150,
                    height: 200,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      top: 30,
                      left: 20,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Hey look,
                  </Text>
                  <Image
                    source={require('../img/greaterThan.png')}
                    style={{
                      width: 45,
                      alignItems: 'center',
                      top: 34,
                      left: 10,
                    }}></Image>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={require('../img/cardImg2.png')}
                  style={{
                    width: 150,
                    height: 200,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      top: 30,
                      left: 20,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Hey look,
                  </Text>
                  <Image
                    source={require('../img/greaterThan.png')}
                    style={{
                      width: 45,
                      alignItems: 'center',
                      top: 34,
                      left: 10,
                    }}></Image>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={require('../img/cardImg3.png')}
                  style={{
                    width: 150,
                    height: 200,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      top: 30,
                      left: 20,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Hey look,
                  </Text>
                  <Image
                    source={require('../img/greaterThan.png')}
                    style={{
                      width: 45,
                      alignItems: 'center',
                      top: 34,
                      left: 10,
                    }}></Image>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={require('../img/cardImg4.png')}
                  style={{
                    width: 150,
                    height: 200,
                  }}>
                  <Image
                    source={require('../img/greaterThan.png')}
                    style={{
                      width: 45,
                      alignItems: 'center',
                      top: 50,
                      left: 10,
                    }}></Image>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={require('../img/cardImg5.png')}
                  style={{
                    width: 150,
                    height: 200,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      top: 30,
                      left: 20,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Hey look,
                  </Text>
                  <Image
                    source={require('../img/greaterThan.png')}
                    style={{
                      width: 45,
                      alignItems: 'center',
                      top: 34,
                      left: 10,
                    }}></Image>
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
          <View style={styles.cardContainer}>
            <TouchableOpacity>
              <CommonTab></CommonTab>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
                fontSize: 16,
              }}>
              Featured Restaurants
            </Text>
            <Text style={{color: 'orangered', fontSize: 15}}>View all</Text>
          </View>
          <Card style={{marginTop: 20, borderRadius: 20, margin: 9}}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Card.Cover
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 25,
                    margin: 10,
                    marginBottom: 30,
                  }}
                  source={require('../img/greatHotel.png')}></Card.Cover>
              </View>
              <View>
                <Card.Content>
                  <Title>Great Deal</Title>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{marginTop: 10, width: '70%'}}>
                    Lorem ipssdf us is simpledf tesd f the printing ..
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                      marginBottom: 12,
                      padding: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginRight: 90,
                      borderWidth: 0.2,
                      borderRadius: 5,
                    }}>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MIcon
                        style={{color: 'gold'}}
                        size={16}
                        color="black"
                        name="star"
                      />
                      5
                    </Text>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MaIcon size={16} color="black" name="location-pin" />2 Km
                    </Text>
                    <Text>
                      <MIcon
                        size={16}
                        color="black"
                        name="bookmark-box-multiple-outline"
                      />
                      <FaIcon size={16} color="black" name="rupee"></FaIcon> 200
                      for two
                    </Text>
                  </View>
                </Card.Content>
              </View>
            </View>
          </Card>
          <Card style={{marginTop: 20, borderRadius: 20, margin: 9}}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Card.Cover
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 25,
                    margin: 10,
                    marginBottom: 30,
                  }}
                  source={require('../img/QueenHotel.png')}></Card.Cover>
              </View>
              <View>
                <Card.Content>
                  <Title>Great Deal</Title>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{marginTop: 10, width: '70%'}}>
                    Lorem ipssdf us is simpledf tesd f the printing ..
                  </Text>
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 10,
                      padding: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginRight: 90,
                      borderWidth: 0.2,
                      borderRadius: 5,
                    }}>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MIcon
                        style={{color: 'gold'}}
                        size={16}
                        color="black"
                        name="star"
                      />
                      5
                    </Text>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MaIcon size={16} color="black" name="location-pin" />2 Km
                    </Text>
                    <Text>
                      <MIcon
                        size={16}
                        color="black"
                        name="bookmark-box-multiple-outline"
                      />
                      <FaIcon size={16} color="black" name="rupee"></FaIcon> 200
                      for two
                    </Text>
                  </View>
                </Card.Content>
              </View>
            </View>
          </Card>
          <Card style={{marginTop: 20, borderRadius: 20, margin: 9}}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Card.Cover
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 25,
                    margin: 10,
                    marginBottom: 30,
                  }}
                  source={require('../img/greatHotel.png')}></Card.Cover>
              </View>
              <View>
                <Card.Content>
                  <Title>Great Deal</Title>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{marginTop: 10, width: '70%'}}>
                    Lorem ipssdf us is simpledf tesd f the printing ..
                  </Text>
                  <View
                    style={{
                      marginTop: 15,
                      padding: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginRight: 90,
                      borderWidth: 0.2,
                      borderRadius: 5,
                    }}>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MIcon
                        style={{color: 'gold'}}
                        size={16}
                        color="black"
                        name="star"
                      />
                      5
                    </Text>
                    <Text style={{borderRightWidth: 0.2, paddingHorizontal: 5}}>
                      <MaIcon size={16} color="black" name="location-pin" />2 Km
                    </Text>
                    <Text>
                      <MIcon
                        size={16}
                        color="black"
                        name="bookmark-box-multiple-outline"
                      />
                      <FaIcon size={16} color="black" name="rupee"></FaIcon> 200
                      for two
                    </Text>
                  </View>
                </Card.Content>
              </View>
            </View>
          </Card>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <View>
              <Image
                resizeMode="cover"
                source={require('../img/bannerImg1.png')}></Image>
            </View>
            <View>
              <Image
                resizeMode="cover"
                source={require('../img/bannerImg2.png')}></Image>
            </View>
            <View>
              <Image
                resizeMode="cover"
                source={require('../img/bannerImg.png')}></Image>
            </View>
          </View>
        </ScrollView>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 18,
            color: 'black',
            margin: 7,
          }}>
          Popular Curations
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.cardContainer}>
              <View style={{padding: 4, margin: 5}}>
                <Image
                  source={require('../img/PopularImg.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Briyani
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/PopularImg1.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 10,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5, flexDirection: 'column'}}>
                <Image
                  source={require('../img/popularImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Burger
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  source={require('../img/PopularImg.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Briyani
                </Text>
              </View>

              <View style={{padding: 4, margin: 5, flexDirection: 'column'}}>
                <Image
                  source={require('../img/popularImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Burger
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/PopularImg1.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Text
          style={{fontWeight: '800', fontSize: 18, color: 'black', margin: 7}}>
          Popular Brands
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.cardContainer}>
              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 10,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>

              <View style={{padding: 4, margin: 5}}>
                <Image
                  style={{marginBottom: 10}}
                  source={require('../img/brandImg2.png')}
                  resizeMode="cover"></Image>
                <Text
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                    marginLeft: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  Pizzas
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{marginTop: 10, borderWidth: 1, borderColor: 'blue'}}>
          <Image
            source={require('../img/offerImg.png')}
            resizeMode="contain"></Image>
        </View>
        <View style={styles.cardContainer}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Poppins-Regular',
              fontWeight: '700',
              fontSize: 16,
            }}>
            Featured Restaurants
          </Text>
          <Text style={{color: 'orangered', fontSize: 15}}>View all</Text>
        </View>
        <Card style={{marginTop: 20, borderRadius: 20, margin: 9}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Card.Cover
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 25,
                  margin: 10,
                  marginBottom: 20,
                }}
                source={require('../img/nearResImg2.png')}></Card.Cover>
            </View>
            <View>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                  <Title>SMS Hotel</Title>
                  <Title
                    style={{
                      marginRight: 70,
                      backgroundColor: 'gold',
                      color: 'white',
                      paddingHorizontal: 5,
                    }}>
                    <MIcon size={24} color="white" name="greater-than" />
                    Featured
                  </Title>
                </View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{marginTop: 10, width: '70%'}}>
                  Lorem ipssdf us is simpledf tesd f the printing ..
                </Text>
                <View
                  style={{
                    marginTop: 15,
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginRight: 90,
                    borderWidth: 0.2,
                    borderRadius: 5,
                  }}>
                  <Text style={{paddingHorizontal: 4, borderRightWidth: 0.2}}>
                    <MIcon
                      style={{color: 'gold'}}
                      size={16}
                      color="black"
                      name="star"
                    />
                    5
                  </Text>
                  <Text style={{paddingHorizontal: 4, borderRightWidth: 0.2}}>
                    <MaIcon size={16} color="black" name="location-pin" />2 Km
                  </Text>
                  <Text>
                    <MIcon
                      size={16}
                      color="black"
                      name="bookmark-box-multiple-outline"
                    />
                    <FaIcon size={16} color="black" name="rupee"></FaIcon> 200
                    for two
                  </Text>
                </View>
              </Card.Content>
            </View>
          </View>
        </Card>
        <Card style={{marginTop: 20, borderRadius: 20, margin: 9}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Card.Cover
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 25,

                  margin: 10,
                  marginBottom: 20,
                }}
                source={require('../img/nearResImg1.png')}></Card.Cover>
            </View>
            <View>
              <Card.Content>
                <Title>RHR Restaurent</Title>

                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{marginTop: 10, width: '70%'}}>
                  Lorem ipssdf us is simpledf tesd f the printing ..
                </Text>
                <View
                  style={{
                    marginTop: 15,
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginRight: 90,
                    borderWidth: 0.2,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      paddingHorizontal: 5,
                      padding: 2,
                      borderRightWidth: 0.2,
                    }}>
                    <MIcon
                      style={{color: 'gold'}}
                      size={16}
                      color="black"
                      name="star"
                    />
                    5
                  </Text>
                  <Text style={{paddingHorizontal: 4, borderRightWidth: 0.2}}>
                    <MaIcon size={16} color="black" name="location-pin" />2 Km
                  </Text>
                  <Text>
                    <MIcon
                      size={16}
                      color="black"
                      name="bookmark-box-multiple-outline"
                    />
                    <FaIcon size={16} color="black" name="rupee"></FaIcon> 200
                    for two
                  </Text>
                </View>
              </Card.Content>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  searchBar: {
    marginTop: 20,
    padding: 10,
  },
  imgBackground: {
    width: '100%',
  },
  cardIcon: {
    top: 60,
    left: 10,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
});
