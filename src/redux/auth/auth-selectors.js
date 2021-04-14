const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.registration.email;
const getIsModalAuth = state => state.auth.isModalAuth;
const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getIsModalAuth,
};
export default authSelectors;
