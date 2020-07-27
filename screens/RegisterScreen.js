import React, { useState } from 'react';
import * as Yup from 'yup';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import { registerWithEmail } from '../components/Firebase/firebase';
import useStatusBar from '../hooks/useStatusBar';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label('Name'),
  email: Yup.string()
    .required('Please enter a valid email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must match Password')
    .required('Confirm Password is required')
});

export default function RegisterScreen({ navigation }) {
  useStatusBar('light-content');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    true
  );
  const [registerError, setRegisterError] = useState('');

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === 'eye') {
      setConfirmPasswordIcon('eye-off');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === 'eye-off') {
      setConfirmPasswordIcon('eye');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignUp(values, actions) {
    const { email, password } = values;
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      setRegisterError(error.message);
    }
  }

  return (
    <SafeView>
      <View>
      <View>
        <LinearGradient
          // Background Linear Gradient
          colors={['#858da6', '#858da6', '#858da6', '#000000']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: -25,
            height: 200,
          }}
        />
        <IconButton
          style={styles.backButton}
          iconName="keyboard-backspace"
          color='white'
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}><Text style={{color: '#858da6'}}>•</Text> •<Text style={{color: '#858da6'}}> •</Text></Text>
      </View>

      <View style={styles.container}>

        <View>
          <Text style={styles.headerText}>Hello!</Text>
          <Text style={styles.textLogin}>Create an account</Text>
        </View>

        <View style={styles.inputView}>
        <Form
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => handleOnSignUp(values)}
      >
        <FormField
          name="name"
          placeholder="Enter name"
          autoFocus={true}
        />
        <FormField
          name="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <FormField
          name="confirmPassword"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={confirmPasswordVisibility}
          textContentType="password"
          handlePasswordVisibility={handleConfirmPasswordVisibility}
        />
        <FormButton title={'Register'} />
        {<FormErrorMessage error={registerError} visible={true} />}
      </Form>
        </View>

        <View>
        <TouchableOpacity
            style={styles.navButton}
            onPress={() => this.signInWithGoogleAsync()}
          >
            <Text style={styles.textSignup}>Continue with Google <Text style={{color: '#6C9DFE'}}> Sign up</Text></Text>
          </TouchableOpacity>
          <Text style={styles.line}>________</Text>
        </View>
        
      </View>
    </View>
      
    </SafeView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 20,
    height: 10,
    marginLeft: 20,
    color: 'white'
  },
    text: {
      color: 'white',
      fontSize: 40,
      top: 40,
      bottom: 0,
      textAlign: 'center',
      marginBottom: 100,
      marginTop: 40
    },
    container: {
      borderRadius: 20,
      backgroundColor: 'white',
      top: -68,
      bottom: 0,
    },
    headerText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 8,
      fontSize: 28,
      lineHeight: 30,
      color: '#0A1F44',
    },
    textLogin: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: 13,
      lineHeight: 13,
      color: 'rgba(0, 0, 0, 0.4)'
    },
    inputView: {
      marginTop: 1,
    },
    navButton: {
      marginTop: 10
    },
    textForgetPwd: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 16,
      color: '#000000'
    },
    textSignup: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 16,
      color: '#B8BBC6'
    },
    line: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
      marginTop: 15,
      bottom: 9,
      marginBottom: 4,
    }
});
