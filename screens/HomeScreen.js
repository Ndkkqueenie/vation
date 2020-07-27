import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Button, Icon } from 'react-native-elements';
import IconButton from '../components/IconButton';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';

export default function HomeScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    
  <View style={styles.container}>
  <ImageBackground source={require('../images/Background.png')} style={styles.image}>
  <View>
      <IconButton
          style={styles.backButton}
          iconName="keyboard-backspace"
          color="#fff"
          size={30}
          onPress={handleSignOut} />
    </View>
    <View style={styles.xcontainer}>
      <Text style={styles.text}>Child's Pose</Text>

    <View style={{flexDirection: 'row'}}>
      <Text style={styles.difText}>Difficulty</Text>
      <Text style={styles.difTextOne}>Iterations</Text>
      <Text style={styles.difTextTwo}>Duration</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={{marginLeft: 8}}>
        <Image
          style={styles.tinyLogo}
          source={require('../images/Vector1.png')} 
        />
        <Image
          style={styles.tinyLogo}
          source={require('../images/Vector1.png')} 
        />
        <Image
          style={styles.tinyLogo}
          source={require('../images/Vector1.png')} 
        />
        <Image
          style={styles.tinyLogo}
          source={require('../images/Vector.png')} 
        />
        <Image
          style={styles.tinyLogo}
          source={require('../images/Vector.png')} 
        />
      </Text>
      <Text style={styles.difTextOne1}>10 Sätze</Text>
      <Text style={styles.difTextTwo1}>15 Minuten</Text>
    </View>
    <Button 
      title="  Play video"
      clear
      buttonStyle={styles.playButton}
      icon={
        <Icon
            name='play'
            type='font-awesome'            
            size={10}
            color= 'white'
        />
      }
      titleStyle={{
          color: "white",
          marginBottom: 2,
          fontSize: 12
      }}
    />
    <Button 
      title="  Mark as done"
      clear
      buttonStyle={styles.checkButton}
      icon={
        <Icon
          name='check'
          type='font-awesome'            
          size={10}
          color= 'white'
        />
      }
      titleStyle={{
          color: "white",
          marginBottom: 2,
          fontSize: 12
      }}
    />
  </View>
  </ImageBackground>
    <View>
      <Text style={styles.whiteText}>Description</Text>
      <Text style={styles.whiteTextOne}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
      <Text style={styles.whiteTextTwo}>Attachments</Text>
      <View style={{flexDirection: 'row', flex: -1}}>
        <Image
          style={styles.tinyImage}
          source={require('../images/Rectangle.png')} 
        />
        <Image
          style={styles.imageOne}
          source={require('../images/Rectangle.png')} 
        />
      </View>
    </View>
</View>
);
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 28,
    height: 10,
    bottom: 0,
    marginLeft: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  xcontainer: {
    marginTop: 125
  },
  image: {
    justifyContent: "center",
    height: 320
  },
  tinyLogo: {
    height: 10,
    width: 8.5,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    marginLeft: 10,
    letterSpacing: 0.192,
    color: "#FFFFFF"
  },
  difText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.192,
    color: "#767B8F",
    marginLeft: 11
  },
  difTextOne: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.192,
    color: "#767B8F",
    marginLeft: 80
  },
  difTextOne1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.192,
    color: "#ffffff",
    marginLeft: 80
  },
  difTextTwo1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.192,
    color: "#ffffff",
    marginLeft: 80
  },
  difTextTwo: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.192,
    color: "#767B8F",
    marginLeft: 80
  },
  playButton: {
    display: 'flex',
    paddingTop: 12,
    alignItems: 'center',
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
    height: 30,
    backgroundColor: '#6C9EFE',
    borderRadius: 8
  },
  checkButton: {
    display: 'flex',
    paddingTop: 12,
    alignItems: 'center',
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
    height: 30,
    backgroundColor: '#5BC58C',
    borderRadius: 8
  },
  whiteText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.192,
    marginTop: 10,
    marginLeft: 8,
    color: '#2C3143'
  },
  whiteTextOne: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 13,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    color: '#707070'
  },
  whiteTextTwo: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.192,
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
    color: '#2C3143'
  },
  tinyImage: {
    height: 98,
    width: 145,
    marginLeft: 8,
    borderRadius: 8
  },
  imageOne: {
    height: 98,
    width: 145,
    marginLeft: 12,
    borderRadius: 8
  }

});
