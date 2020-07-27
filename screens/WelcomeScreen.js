import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import useStatusBar from '../hooks/useStatusBar';

export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View>
        <LinearGradient
            // Background Linear Gradient
            colors={['#1a1a2e', '#0d0d1c', '#000000']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: -25,
              height: 1000,
            }}
        />
        <View style={styles.xcontainer}>
          <View style={styles.container}>
            <Text style={styles.firstText}>YOUR PERSONAL TRAINER, RETHOUGHT.</Text>
          </View>
          <View>
            <Text style={styles.secondText}>Your everyday life is stressful enough.Stay flexible with online support in everyday life.</Text>
          </View>
          <View >
            <Button 
              title=" Sign In with Apple"
              clear
              buttonStyle={styles.appleButton}
              icon={
                  <Icon
                      name='apple'
                      type='font-awesome'            
                      size={20}
                      color= 'white'
                  />
              }
              titleStyle={{
                  color: "white"
              }}
            />
          </View>
          <View >
            <Button 
              title=" Sign In with Google"
              clear
              buttonStyle={styles.googleButton}
              icon={
                  <Icon
                      name='google'
                      type='font-awesome'            
                      size={20}
                      color= 'white'
                  />
              }
              titleStyle={{
                  color: "white"
              }}
            />
          </View>
          <View >
            <Button 
              title=" Sign In with Email"
              onPress={() => navigation.navigate('Register')}
              clear
              buttonStyle={styles.emailButton}
              titleStyle={{
                  color: "white"
              }}
            />
          </View>
          <View >
            <Button 
              title=" Log In"
              onPress={() => navigation.navigate('Login')}
              clear
              buttonStyle={styles.logButton}
              titleStyle={{
                  color: "white"
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {this.props.navigation.navigate('Back')}}
          >
            <Text style={styles.classes}>Explore the classes</Text>
          </TouchableOpacity>
          <View><Text style={styles.line}>________</Text></View>
          </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  xcontainer: {
    marginTop: 6
  },
  firstText: {
    color: 'white',
    fontSize: 39,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 4,
    lineHeight: 40,
  },
  secondText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 4,
    fontSize: 17,
    lineHeight: 20,
    color: 'white'
  },
  appleButton: {
    display: 'flex',
    paddingTop: 12,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 20,
   /* Basic / Black */
    backgroundColor: '#000000',
    borderRadius: 40
  },
  googleButton: {
    display: 'flex',
    paddingTop: 12,
    alignItems: 'center',
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
   /* Basic / Black */
    backgroundColor: '#0088FF',
    borderRadius: 40
  },
  emailButton: {
    display: 'flex',
    paddingTop: 12,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
   /* Basic / Black */
    backgroundColor: '#5BC58B',
    borderRadius: 40
  },
  logButton: {
    display: 'flex',
    paddingTop: 12,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
   /* Basic / Black */
    backgroundColor: '#6C9DFE',
    borderRadius: 40
  },
  classes: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginTop: 11,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: 'white'
  },
  line: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginTop: 1,
    marginBottom: 9,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF'
  },
  container: {
    marginTop: 2,
  }
});