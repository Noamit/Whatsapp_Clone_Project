

class User {
constructor(userName, displayName, password, img) {
        this.userName = userName;
        this.displayName = displayName;
        this.password = password;
        this.img = img;
        this.userChats = new Map();
    }

    getUserName () {
        return this.username;
    }
}

export default User