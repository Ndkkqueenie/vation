import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Yup from 'yup';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import { passwordReset } from '../components/Firebase/firebase';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import useStatusBar from '../hooks/useStatusBar';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
});

export default function ForgotPasswordScreen({ navigation }) {
  useStatusBar('light-content');

  const [customError, setCustomError] = useState('');

  async function handlePasswordReset(values) {
    const { email } = values;

    try {
      await passwordReset(email);
      navigation.navigate('Welcome');
    } catch (error) {
      setCustomError(error.message);
    }
  }

  return (
    <SafeView >
      <View>
        <IconButton
          style={styles.backButton}
          iconName="keyboard-backspace"
          color='black'
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Image
          style={styles.imageOne}
          source={require('../assets/icon.png')} 
        />
      </View>
      <View style={styles.container}>
      <Form
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handlePasswordReset(values)}
      >
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <FormButton title="Forgot Password" />
        {<FormErrorMessage error={customError} visible={true} />}
      </Form>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  imageOne: {
    height: 78,
    width: 109,
    marginLeft: 100,
    marginTop: 80
  },
  backButton: {
    marginTop: 10,
    height: 15,
    marginLeft: 20,
    color: 'white'
  },
});
