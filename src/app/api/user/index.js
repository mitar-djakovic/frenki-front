import axios from 'axios';

const login = (email, password) => axios.post('http://localhost:8000/api/accounts/login', {
  email,
  password,
});

const signup = (firstName, lastName, email, password, repeatPassword) => axios.post('http://localhost:8000/api/accounts/signup', {
  firstName,
  lastName,
  email,
  password,
  repeatPassword,
});

export {
  login,
  signup,
};
