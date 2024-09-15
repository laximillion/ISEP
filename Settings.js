import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const buttonHeight = 50;

const Settings = () => {
    const navigation = useNavigation();

    const HandleSignOut = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace('HomeScreen')
        })
        .catch(error => alert(error.message))
    }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.info}> Email: { auth.currentUser?.email}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Account</Text>
          <Image style={styles.icon} source={require('./profile.png')} />
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Privacy & Security</Text>
          <Image style={styles.icon} source={require('./profile.png')} />
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Contact & Help</Text>
          <Image style={styles.icon} source={require('./profile.png')} />
        </View>
        <TouchableOpacity onPress={HandleSignOut}><View  style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
          <Image style={styles.icon} source={require('./profile.png')} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: windowWidth,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    height: buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Settings;
