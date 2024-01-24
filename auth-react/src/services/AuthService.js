import axios from "axios";

class AuthService {
  static register(user) {
    return axios.post("http://localhost:8080/api/auth/register", user);
  }

  static authenticate(user) {
    return axios.post("http://localhost:8080/api/auth/authenticate", user);
  }
}

export default AuthService;
