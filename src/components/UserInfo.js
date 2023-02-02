export class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userData = {
      editProfileName: this._userName.textContent,
      editProFileJob: this._userJob.textContent,
      userID: this._userID,
      avatar: this._avatar
    }
    return userData;
  }

  getUserID() {
    return this._userID;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.about;
    this._userID = userData._id;
    this._avatar = userData.avatar;
  }

  setUserAvatar(userData) {
    this._userAvatar.src = userData.avatar;
  }
}
