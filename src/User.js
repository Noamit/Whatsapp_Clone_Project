class User {
constructor(userNameX, displayNameX, passwordX, imgX) {
        this.userName = userNameX;
        this.displayName = displayNameX;
        this.password = passwordX;
        this.img = imgX;
        this.userChats = [];
    }

    getUserName () {
        return this.username;
    }
}

export default User