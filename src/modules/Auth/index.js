class Auth {
  constructor() {
    // this.user_token = JSON.parse(localStorage.getItem('auth'))||{}
  }
  async getAuth(){
    try {
      const authJson = await AsyncStorage.getItem('auth')
      return authJson != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      throw e;
    }
  }

  async getToken() {
    return await this.getAuth().token;
    // return this.user_token.token
  }
  async getUserId() {
    return await this.getAuth().user_id;
    // return this.user_token.user_id
  }
  async setUserToken(new_token) {
    try {
      const tokenJson = JSON.stringify(new_token)
      await AsyncStorage.setItem('auth', tokenJson)
    } catch(e) {
      throw e;
    }
    // this.user_token = new_token
    // localStorage.setItem('auth', JSON.stringify(new_token))
  }
  async logout() {
    try {
      await AsyncStorage.removeItem('auth')
    } catch(e) {
      throw e;
    }
    // localStorage.removeItem('auth')
  }
}
export default new Auth()