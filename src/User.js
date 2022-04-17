import usersDataBase from './DataBase'

class User {

    constructor(userName, displayName, password, img){
        this.userName = userName;
        this.displayName = displayName;
        this.password = password;
        this.img = img;

        usersDataBase.push({userName : this.userName, displayName :this.displayName, password : this.password, img : this.img,}) ;
    }
}

export default User