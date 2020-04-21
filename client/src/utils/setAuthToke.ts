/* eslint-disable dot-notation */
import axios from 'axios';
// check to see if a toke is passed in
//  if it is then set it to the global header
// if not then delete the token from the global headers


const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};


export default setAuthToken;
