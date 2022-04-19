class User {
constructor(userNameX, displayNameX, passwordX, imgX) {
        this.userName = userNameX;
        this.displayName = displayNameX;
        this.password = passwordX;
        this.img = imgX;
        this.userChats = [];
        this.lastMsg ='';
        this.lastMsgTime = '';
    }

    getUserName () {
        return this.username;
    }
}

export default User