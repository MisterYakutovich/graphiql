import { fireEvent, render, waitFor } from '@testing-library/react';
import Register from './Register';
import '@testing-library/jest-dom';
import { Translations } from '../../types/translate';
import { LanguageContext } from '../../main';
import { MemoryRouter } from 'react-router-dom';

describe('Register component', () => {
  test('renders register form', () => {
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
        firstname: 'First Name',
        submit: 'Submit',
        submit_2: 'Register with Google',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
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
        firstname: 'Имя',
        submit: 'Отправить',
        submit_2: 'Зарегистрируйтесь через Google',
        email: 'Электронная почта',
        password: 'Пароль',
        submit_login: 'Войти',
        submit_login_2: 'Войти через Google',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <LanguageContext.Provider
          value={{ language: 'EN', translations, changeLanguage: () => {} }}
        >
          <Register />
        </LanguageContext.Provider>
      </MemoryRouter>
    );

    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
    expect(getByText('Register with Google')).toBeInTheDocument();
  });

  /*describe('Register', () => {

    beforeEach(() => {
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
            welcome: 'WELCOME',
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
            form_login_title: 'Welcome',
            email: 'Email',
            password: 'Password',
            submit_login: 'Login',
            submit_login_2: 'Login with Google',
            firstname: 'First Name',
            submit: 'Submit',
            submit_2: 'Register with Google',
            back_sign_in: '',
            now: '',
            alert_registration: '',
            validacia_password: '',
            validation_name: 'First name must start with an uppercase letter',
            digit: '',
            lowercase: '',
            uppercase: '',
            simbol: ''
          
        },
        RU: {
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
            welcome: 'ЖЕЛАННЫЙ',
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
            form_login_title: 'Добро пожаловать!',
            firstname: "Имя",
            submit: "Отправить",
            submit_2: "Зарегистрируйтесь через Google",
            email: "Электронная почта",
            password: "Пароль",
            submit_login: 'Войти',
            submit_login_2: 'Войти через Google',
            back_sign_in: '',
            now: '',
            alert_registration: '',
            validacia_password: '',
            validation_name: 'Имя должно начинаться с заглавной буквы"',
            digit: '',
            lowercase: '',
            uppercase: '',
            simbol: ''
           
        },
      };
      render( <MemoryRouter>
        <LanguageContext.Provider value={{ language: 'EN', translations, changeLanguage: () => {} }}>
        <Register />
        </LanguageContext.Provider>
        </MemoryRouter>);
    });
  
    test('should display error message when firstName is empty', () => {
     
      const firstNameInput = screen.getByLabelText('First Name');
      fireEvent.change(firstNameInput, { target: { value: '' } });
  
      const errorMessage = screen.getByText('firstName is a required field');
      expect(errorMessage).toBeInTheDocument();
    });
  });
  /*test('displays error message for invalid input', async () => {
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
            welcome: 'WELCOME',
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
            form_login_title: 'Welcome',
            email: 'Email',
            password: 'Password',
            submit_login: 'Login',
            submit_login_2: 'Login with Google',
            firstname: 'First Name',
            submit: 'Submit',
            submit_2: 'Register with Google',
            back_sign_in: '',
            now: '',
            alert_registration: '',
            validacia_password: '',
            validation_name: 'First name must start with an uppercase letter',
            digit: '',
            lowercase: '',
            uppercase: '',
            simbol: ''
          
        },
        RU: {
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
            welcome: 'ЖЕЛАННЫЙ',
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
            form_login_title: 'Добро пожаловать!',
            firstname: "Имя",
            submit: "Отправить",
            submit_2: "Зарегистрируйтесь через Google",
            email: "Электронная почта",
            password: "Пароль",
            submit_login: 'Войти',
            submit_login_2: 'Войти через Google',
            back_sign_in: '',
            now: '',
            alert_registration: '',
            validacia_password: '',
            validation_name: 'Имя должно начинаться с заглавной буквы"',
            digit: '',
            lowercase: '',
            uppercase: '',
            simbol: ''
           
        },
      };
    const { getByLabelText, getByText,queryByText } = render(  
    <MemoryRouter>
        <LanguageContext.Provider value={{ language: 'EN', translations, changeLanguage: () => {} }}>
        <Register />
        </LanguageContext.Provider>
        </MemoryRouter>
        );
    
   fireEvent.change(getByLabelText('First Name'), { target: { value: '' } });
    //fireEvent.change(getByLabelText('Email'), { target: { value: 'invalid_email' } });
   // fireEvent.change(getByLabelText('Password'), { target: { value: 'abc' } });
    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
     
      expect(getByText('firstName is a required field')).toBeInTheDocument();
      //expect(getByText('email must be a valid email')).toBeInTheDocument();
     // expect(getByText('password must be at least 5 characters')).toBeInTheDocument();
    });
  });*/

  test('submits the form with valid input', async () => {
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
        firstname: 'First Name',
        submit: 'Submit',
        submit_2: 'Register with Google',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
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
        firstname: 'Имя',
        submit: 'отправить',
        submit_2: 'Зарегистрируйтесь через Google',
        email: 'Электронная почта',
        password: 'Пароль',
        submit_login: 'Войти',
        submit_login_2: 'Войти через Google',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <LanguageContext.Provider
          value={{ language: 'EN', translations, changeLanguage: () => {} }}
        >
          <Register />
        </LanguageContext.Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      fireEvent.change(getByLabelText('First Name'), {
        target: { value: 'John' },
      });
      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'Password123!' },
      });
      fireEvent.click(getByText('Submit'));
    });
  });
});
