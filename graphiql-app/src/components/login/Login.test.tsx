import {  fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../login/Login';
import { LanguageContext } from '../../main';
import { Translations } from '../../types/translate';


test('renders login form', () => {
  const translations: Record<string, Translations> = {
    EN: {
      description_text_1: '',
      description_text: '',
      description_text_2: '',
      description_text_3: '',
      description_text_4: '',
      description_text_5: '',
      description_text_6: '',
      title: '',
      title_span: '',
      title_1: '',
      signOut: '',
      welcome: '',
      main: '',
      signIn: '',
      signup: '',
      course_description_title: '',
      course_description_text: '',
      course_description_text_1: '',
      course_description_text_2: '',
      course_description_text_3: '',
      course_description_text_4: '',
      course_description_text_5: '',
      course_description_text_6: '',
      course_description_text_7: '',
      course_description_text_8: '',
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Email',
      password: 'Password',
      submit_login: 'Login',
      submit_login_2: 'Login with Google',
      firstname: '',
      submit: '',
      submit_2: '',
      back_sign_in: '',
      now: '',
      alert_registration: '',
      validacia_password: '',
      validation_name: '',
      digit: '',
      lowercase: '',
      uppercase: '',
      simbol: ''
    },
    RU: {
      description_text: '',
      description_text_1: '',
      description_text_2: '',
      description_text_3: '',
      description_text_4: '',
      description_text_5: '',
      description_text_6: '',
      title: '',
      title_span: '',
      title_1: '',
      signOut: '',
      welcome: '',
      main: '',
      signIn: '',
      signup: '',
      course_description_title: '',
      course_description_text: '',
      course_description_text_1: '',
      course_description_text_2: '',
      course_description_text_3: '',
      course_description_text_4: '',
      course_description_text_5: '',
      course_description_text_6: '',
      course_description_text_7: '',
      course_description_text_8: '',
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Электронная почта',
      password: 'Пароль',
      submit_login: 'Войти',
      submit_login_2: 'Войти через Google',
      firstname: '',
      submit: '',
      submit_2: '',
      back_sign_in: '',
      now: '',
      alert_registration: '',
      validacia_password: '',
      validation_name: '',
      digit: '',
      lowercase: '',
      uppercase: '',
      simbol: ''
    },
  };
 
 
    const {getByText, getByLabelText } = render(
      <LanguageContext.Provider value={{ language: 'EN', translations, changeLanguage: () => {} }}>
      <Login />
      </LanguageContext.Provider>
    )
     expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();  
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Login with Google")).toBeInTheDocument();
  });
 
  test('can type in email and password fields', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: 'Email',
        password: 'Password',
        submit_login: 'Login',
        submit_login_2: 'Login with Google',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: ''
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: 'Электронная почта',
        password: 'Пароль',
        submit_login: 'Войти',
        submit_login_2: 'Войти через Google',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: ''
      },
    };
    const { getByLabelText } = render(
    <LanguageContext.Provider value={{ language: 'EN', translations, changeLanguage: () => {} }}>
      <Login />
      </LanguageContext.Provider>
    );
    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const passwordInput = getByLabelText('Password') as HTMLInputElement;
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
  test('submits login form with email and password', async () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: 'Email',
        password: 'Password',
        submit_login: 'Login',
        submit_login_2: 'Login with Google',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: ''
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: 'Электронная почта',
        password: 'Пароль',
        submit_login: 'Войти',
        submit_login_2: 'Войти через Google',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: ''
      },
    };
    const { getByText, getByLabelText } = render(
      <LanguageContext.Provider value={{ language: 'EN', translations, changeLanguage: () => {} }}>
      <Login />
      </LanguageContext.Provider>
    );
    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const passwordInput = getByLabelText('Password') as HTMLInputElement;
    const submitButton = getByText('Login');
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  
  });
 
