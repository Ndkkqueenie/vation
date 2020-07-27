import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Yup from 'yup';
import {LinearGradient} from 'expo-linear-gradient';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import { loginWithEmail } from '../components/Firebase/firebase';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import useStatusBar from '../hooks/useStatusBar';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a registered email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password')
});

export default function LoginScreen({ navigation }) {
  useStatusBar('light-content');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values) {
    const { email, password } = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <SafeView style={styles.xcontainer}>
      <View>
      
      <View>
        <LinearGradient
          // Top Background Linear Gradient
          colors={['#858da6', '#858da6', '#858da6', '#858da6', '#000000']}
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
          color="#fff"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>•<Text style={{color: '#858da6'}}> • •</Text></Text>
      </View>

      <View style={styles.container}>

        <View>
          <Text style={styles.headerText}>Welcome Back</Text>
          <Text style={styles.textLogin}>Login to your account</Text>
        </View>

        <View style={styles.inputView}>
        <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handleOnLogin(values)}
      >
        <FormField
          name="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
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
        <FormButton title={'Login'} />
        {<FormErrorMessage error={loginError} visible={true} />}
      </Form>
        </View>

        <View>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.textForgetPwd}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.textSignup}>Don't have an account? <Text style={{color: '#6C9DFE'}}> Sign up</Text></Text>
          </TouchableOpacity>
          <Text style={styles.line}>________</Text>
        </View>

      </View>

    </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  /* custom css for login page implemented accordingly*/
  backButton: {
    marginTop: 10,
    height: 10,
    marginLeft: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 40,
    top: 60,
    bottom: 0,
    textAlign: 'center',
    marginBottom: 100,
    marginTop: 40
  },
  container: {
    borderRadius: 20,
    backgroundColor: 'white',
    height: 500,
    top: -50,
    bottom: 0,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 31,
    lineHeight: 34,
    color: '#0A1F44',
  },
  textLogin: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.4)'
  },
  inputView: {
    marginTop: 15,
  },
  navButton: {
    marginTop: 20
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
    marginTop: 0,
    bottom: 9,
    marginBottom: 4,
  }
});
