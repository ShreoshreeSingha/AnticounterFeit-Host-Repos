import React, { useState, useEffect, useReducer } from 'react';
import Header from '../../components/Header';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    };
  }
  return {
    value: '',
    isValid: false
  };
};
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    };
  }
  return {
    value: '',
    isValid: false
  };
};
const Login = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });
  useEffect(() => {
    console.log('EFFECT RUNNING');
    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);
  const {
    isValid: emailIsValid
  } = emailState;
  const {
    isValid: passwordIsValid
  } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const emailChangeHandler = event => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });
  };
  const passwordChangeHandler = event => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value
    });
  };
  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR'
    });
  };
  const submitHandler = event => {
    event.preventDefault();
    console.log("Email :" + emailState.value);
    console.log("Password :" + passwordState.value);
    props.onLogin(emailState.value, passwordState.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(Card, {
    className: classes.login
  }, /*#__PURE__*/React.createElement(Header, {
    title: "Acespire Tech Consulting"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submitHandler,
    className: classes.form
  }, /*#__PURE__*/React.createElement("div", {
    className: `${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "E-Mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    value: emailState.value,
    onChange: emailChangeHandler,
    onBlur: validateEmailHandler
  })), /*#__PURE__*/React.createElement("div", {
    className: `${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    value: passwordState.value,
    onChange: passwordChangeHandler,
    onBlur: validatePasswordHandler
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.actions
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    className: classes.btn,
    disabled: !formIsValid
  }, "Login")))));
};
export default Login;