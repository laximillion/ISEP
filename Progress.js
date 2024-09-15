import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import firstIcon from './first.png';
import secondIcon from './second.png';
import thirdIcon from './third.png';
import forthIcon from './forth.png';

const Progress = () => {
  const [firstProgress, setfirstProgress] = useState(0.5);
  const [secondProgress, setsecondProgress] = useState(0.2);
  const [thirdProgress, setthirdProgress] = useState(0.9);
  const [forthProgress, setforthProgress] = useState(0.4);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>

    
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Цивилизация великой степи</Text>
        <Image source={firstIcon} style={styles.icon} />
        <ProgressBar
          progress={firstProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${firstProgress * 10}pt`}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Монгольское нашедствие</Text>
        <Image source={secondIcon} style={styles.icon} />
        <ProgressBar
          progress={secondProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${secondProgress * 10}pt`}</Text>
      </View>


      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Казахское ханство</Text>
        <Image source={thirdIcon} style={styles.icon} />
        <ProgressBar
          progress={thirdProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${thirdProgress * 10}pt`}</Text>
      </View>


      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Голод 1931-33г</Text>
        <Image source={forthIcon} style={styles.icon} />
        <ProgressBar
          progress={forthProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${forthProgress * 10}pt`}</Text>
      </View>




    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fb09e',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 40,
        marginBottom: 20
      },
      sectionProgressText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      sectionContainer: {
        borderWidth: 2,
        borderColor: '#4e826f',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        height: 50,
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
      },
      sectionTitle: {
        width: 75,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      icon: {
        width: 30,
        height: 30,
        marginRight: 10
      },
      progressBar: {
        
        height: 20,
        backgroundColor: '#d3e3dc',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 10
      },
      progressText: {
        fontSize: 16,
        color: '#6e8b6d',
        fontWeight: 'bold',
        marginLeft: 5
      }
    });

    export default Progress;