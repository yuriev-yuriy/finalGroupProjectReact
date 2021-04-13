const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.registration.data.email;
const getCode = state => state.auth.registration.code;


const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getCode,
};

export default authSelectors;
