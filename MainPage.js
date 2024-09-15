import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



const MainPage = () => {



  const navigation = useNavigation();

  const StoryPage = () => {
    navigation.navigate('StoryPage');
  };

  const Settings = () => {
    navigation.navigate('Settings');
  };

  const RePage = () => {
    navigation.navigate('ProgressPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Привет, Амина!</Text>
        <View style={styles.location}>
          <Image source={require('./video.png')} style={styles.icon} />
          <Text style={styles.locationText}>Развивайся и находи возможности легко и просто с помощью Исскуственного интелекта и Моментальной регистрации! </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Ответь на вопросы чтобы мы получше узнали твои нужды и составили план для развития!</Text>
        </View>
        <Text style={styles.message}>

          
         Попробуй сейчас!
        </Text>
      </View>
      <View style={styles.menuContainer}>
      <View style={styles.menuBar}>
  <TouchableOpacity style={styles.menuButton}>
    <Image source={require('./main.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Главная</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={StoryPage}>
    <Image source={require('./story.png')} style={styles.menuIcon} />
    <Text style={styles.menuText} >Активности</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={RePage}>
    <Image source={require('./progress.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Чаты</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={Settings}>
    <Image source={require('./profile.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Прогресс</Text>
  </TouchableOpacity>
</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ffff',
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f6f7eb',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 20,
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginLeft: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginLeft: 10,
  },
  message: {
    fontSize: 20,
    color: '#2a9d8f',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2a9d8f',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f6f7eb',
    textAlign: 'center',
  },
  menuBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f6f7eb',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  menuButton: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
});

export default MainPage;