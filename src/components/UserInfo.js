export class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    const userData = {
      editProfileName: this._userName.textContent,
      editProFileJob: this._userJob.textContent,
      userID: this._userID
    }
    return userData;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.about;
    this._userID = userData._id;
  }
}
