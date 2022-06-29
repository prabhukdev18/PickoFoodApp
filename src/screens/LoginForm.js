import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function LoginForm({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleSubmit = () => {
    let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (email == '' || password == '')
      return (
        setErrorEmail(' Email and password mismatch!!'),
        setErrorPassword('Email and password mismatch !!')
      );
    else if (!emailRegex.test(email))
      return setErrorEmail('Please Enter valid Email ID !!!');
    else if (!passwordRegex.test(password))
      return setErrorPassword('Please Enter Valid Password !!!');
    // else return navigation.navigate('Home', {email: email});
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      keyboardShouldPersistTaps="always">
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../img/loginLogo.jpg')}></Image>
      </View>
      <View style={styles.container}>
        <TextInput
          // secureTextEntry={false}
          name="email"
          placeholder="Please Enter your Email ID !!"
          style={styles.inputEmail}
          onChangeText={text => setEmail(text)}></TextInput>
        {!errorEmail ? (
          <Text></Text>
        ) : (
          <Text style={{color: 'red'}}>{errorEmail}</Text>
        )}
      </View>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={true}
          name="password"
          placeholder="Please Enter your Password !!"
          style={styles.inputText}
          onChangeText={text => setPassword(text)}></TextInput>
        {errorPassword && <Text style={{color: 'red'}}>{errorPassword}</Text>}
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 60,
  },
  img: {
    width: '90%',
    height: 180,
    borderRadius: 30,
    opacity: 0.7,
  },
  inputEmail: {
    paddingHorizontal: 50,
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
  },
  inputText: {
    paddingHorizontal: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  btn: {
    width: '100%',
    paddingHorizontal: 120,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'orangered',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
